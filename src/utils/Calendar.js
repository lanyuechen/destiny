import SHEN_SHA from './shenSha';
import getShenSha from './rishensha';

export default class Calendar {
  // 天干
  static TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  // 地支
  static DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  static SHENG_XIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  // 十二建星
  static JIAN_CHU = ['建', '除', '满', '平', '定', '执', '破', '危', '成', '收', '开', '闭'];
  /**
   * 《神枢经》有云：“青龙、明堂、金匮、天德、玉堂、司命，皆月内天黄道之神也。
   * 所值之日，皆宜兴众务，不避太岁、将军、月刑。一切凶恶，自然避之。
   * 天刑、朱雀、白虎、天牢、玄武、勾陈者，月中黑道也。
   * 所理之方、所值之日皆不可兴土功、营屋舍、稀途、远行、嫁娶、出军。”
   * 
   * 《三曆同会》云：凡吉凶百事得黄道为顺，大吉，黑道为逆，百事皆凶。
   */
  static HUANG_HEI_DAO = [
    '青龙(黄道)', '明堂(黄道)', '天刑(黑道)', '朱雀(黑道)', '金匮(黄道)', '天德(黄道)',
    '白虎(黑道)', '玉堂(黄道)', '天牢(黑道)', '玄武(黑道)', '司命(黄道)', '勾陈(黑道)',
  ];
  // static x = '道远几时通达，路遥何日还乡';
  static HUANG_HEI_DAO_MASK = [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0];

  static LUNAR_MONTH = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
  static LUNAR_DAY = [
    '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十',
  ]
  /**
   * 二进制编码，从右向左
   * 0~3位: 表示该年是闰几月（1~12，0表示没有闰月）
   * 4~15位：表示1~12月是大月还是小月（1表示大月，0表示小月）
   * 16位：表示闰月是大月还是小月（1表示大月，0表示小月）
   */
  static LUNAR_HEX = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,//1900-1909
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,//1910-1919
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,//1920-1929
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,//1930-1939
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,//1940-1949
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,//1950-1959
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,//1960-1969
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,//1970-1979
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,//1980-1989
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,//1990-1999
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,//2000-2009
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,//2010-2019
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,//2020-2029
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,//2030-2039
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,//2040-2049
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,//2050-2059
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,//2060-2069
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,//2070-2079
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,//2080-2089
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,//2090-2099
    0x0d520, //2100
  ];

  static getLunarMonths(y) {
    const months = [];
    const lunarHex = Calendar.LUNAR_HEX[y - 1900];

    let s = 0x8000;
    for (let i = 0; i < 12; i++) {  // 15位 ~ 4位，共12个月
      months[i] = {
        isLeap: false,
        month: i + 1,
        days: (lunarHex & s) ? 30 : 29,
      }
      s >>= 1;
    }

    const leapMonth = lunarHex & 0xf; // 3位 ~ 0位，闰几月
    if (leapMonth > 0) {
      const leapDays = (lunarHex & 0x10000) ? 30 : 29;  // 16位，闰月有多少天
      months.splice(leapMonth, 0, {
        isLeap: true,
        month: leapMonth,
        days: leapDays,
      });
    }
    return months;
  }

  /**
   * 传入阳历年月日获得的公历年月日
   * @param {Number} y 公历年
   * @param {Number} m 公历月
   * @param {Number} d 公历日
   * @returns {{ly, lm, ld, isLeap}} {农历年，农历月，农历日，是否是闰月}
   */
  static solar2Lunar(y, m, d) {
    let ly = 1900;
    let lm = null;
    let ld = (Date.UTC(y, m - 1, d) - Date.UTC(1900, 0, 31)) / 86400000;

    loop: for (ly = 1900; ly < 2100; ly++) {
      const months = Calendar.getLunarMonths(ly);
      for (let j = 0; j < months.length; j++) {
        lm = months[j];
        if (ld <= lm.days) {
          break loop; // 跳出循环
        }
        ld -= lm.days;
      }
    }

    return {
      ly,
      lm: lm.month,
      ld: ld + 1,
      isLeap: lm.isLeap,
    };
  }

  static siZhu(y, m, d, h) {
    const { ly, lm, ld, isLeap } = Calendar.solar2Lunar(y, m, d);

    // 从已知的年份减3,然后再除以10余数就是年干
    // 年干索引 = (农历年份 - 4) % 10
    const nianGanIndex = (ly - 3 - 1) % 10 // 0 ~ 9
    const nianGan = Calendar.TIAN_GAN[nianGanIndex];

    // 从已知的年份减3,然后在除以12余数就是年支
    // 年支索引 = (农历年份 - 4) % 12
    const nianZhiIndex = (ly - 3 - 1) % 12 // 0 ~ 11
    const nianZhi = Calendar.DI_ZHI[nianZhiIndex];

    const nianZhu = `${nianGan}${nianZhi}`;

    // 用年干乘以2，尾数再加月份，最后一位数就是当月的月干
    // 月干索引 = ((年干数 * 2) - 1 + 月份) % 10
    const yueGanIndex = ((nianGanIndex + 1) * 2 - 1 + lm) % 10; // 0 ~ 9
    const yueGan = Calendar.TIAN_GAN[yueGanIndex];

    // 固定的，1月：寅，2月：卯，... 11月：子，12月：丑
    const yueZhiIndex = (lm + 1) % 12; // 0 ~ 11
    const yueZhi = Calendar.DI_ZHI[yueZhiIndex];

    const yueZhu = `${yueGan}${yueZhi}`;

    // 当前日期与 1900/1/1 相差天数
    const offset = (Date.UTC(y, m - 1, d) - Date.UTC(1900, 0, 1)) / 86400000 + 10; // ? 目前不明白为什么+10

    const riGanIndex = offset % 10;
    const riGan = Calendar.TIAN_GAN[riGanIndex];

    const riZhiIndex = offset % 12;
    const riZhi = Calendar.DI_ZHI[riZhiIndex];

    const riZhu = `${riGan}${riZhi}`;

    // 23~1时：子时，1~3时：丑时，...
    const shiZhiIndex = Math.floor((h + 1) % 24 / 2);
    const shiZhi = Calendar.DI_ZHI[shiZhiIndex];

    // 时干公式：日干乘以二，加上时支数，再减二，尾数就为时干
    const shiGanIndex = ((riGanIndex + 1) * 2 + (shiZhiIndex + 1) - 2 - 1) % 10;
    const shiGan = Calendar.TIAN_GAN[shiGanIndex];

    const shiZhu = `${shiGan}${shiZhi}`;

    const huangHeiDao = Calendar.getHuangHeiDao(yueZhiIndex, riZhiIndex);
    const jianChu = Calendar.getJianChu(lm, riZhiIndex);
    const shenSha = getShenSha(yueZhi, `${riGan}${riZhi}`);

    return {
      ly,
      lm,
      ld,
      isLeap,
      huangHeiDao,
      jianChu,
      shenSha,
      shengxiao: Calendar.SHENG_XIAO[(ly - 4) % 12],
      solar: `${y}年${m}月${d}日`,
      lunar: `农历${ly}年${Calendar.LUNAR_MONTH[lm - 1]}月${Calendar.LUNAR_DAY[ld - 1]}`,
      ganZhi: `${nianZhu}年 ${yueZhu}月 ${riZhu}日 ${shiZhu}时`,
    };
  }

  static getHuangHeiDao(yueZhiIndex, riZhiIndex) {
    // 黄黑道
    // 子午申上起，卯酉却居寅。
    // 寅申居子地，巳亥午宫轮。
    // 辰戌龙位上，丑未戌宫寻。
    const huangHeiDaoStartIndex = (yueZhiIndex * 2 + 9 - 1) % 12;
    const huangHeiDaoIndex = (riZhiIndex - huangHeiDaoStartIndex + 12) % 12;
    return Calendar.HUANG_HEI_DAO[huangHeiDaoIndex];
  }

  static getJianChu(lm, riZhiIndex) {
    // 十二建除
    // 正月建寅，二月建卯，三月建辰，四月建巳，五月建午，六月建未，
    // 七月建申，八月建酉，九月建戌，十月建亥，冬月建子，腊月建丑。
    const jianChuStartIndex = (lm + 1) % 12;
    const jianChuIndex = (riZhiIndex - jianChuStartIndex + 12) % 12;
    return Calendar.JIAN_CHU[jianChuIndex];
  }
}
