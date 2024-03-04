import Calendar from '@/utils/Calendar';

window.Calendar = Calendar;

export default () => {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();

  console.log('+++', Calendar.siZhu(y, m, d, h))

  return (
    <>
      test
    </>
  )
}
