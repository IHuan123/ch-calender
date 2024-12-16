import ChCalender from 'w-calender';
import type { Options } from 'w-calender/types';
import dayjs from 'dayjs';

import 'w-calender/dist/w-calender.css';
function main() {
  const options: Options = {
    data: [
      {
        type: 'time',
        start: dayjs().format('YYYY-MM-DD 00:00'),
        end: dayjs().format('YYYY-MM-DD 4:00'),
        title: '这里是测试1',
      },
      {
        type: 'time',
        start: dayjs().format('YYYY-MM-DD 8:00'),
        end: dayjs().format('YYYY-MM-DD 11:00'),
        title: '这里是测试2',
      },
      {
        type: 'day',
        start: dayjs().format('YYYY-MM-DD 00:00'),
        end: dayjs().format('YYYY-MM-DD 23:59'),
        title: '这里是测试3',
      },
      {
        type: 'time',
        start: dayjs().format('YYYY-MM-DD 12:00'),
        end: dayjs().format('YYYY-MM-DD 14:00'),
        title: '这里是测试4',
      },
      {
        type: 'time',
        start: dayjs().format('YYYY-MM-DD 12:00'),
        end: dayjs().format('YYYY-MM-DD 14:00'),
        title: '这里是测试5',
      },
      {
        type: 'time',
        start: dayjs().format('YYYY-MM-DD 13:00'),
        end: dayjs().format('YYYY-MM-DD 15:00'),
        title: '这里是测试6',
      },
      {
        type: 'time',
        start: dayjs().format('YYYY-MM-DD 15:30'),
        end: dayjs().format('YYYY-MM-DD 15:50'),
        title: '这里是测试7',
      },
    ],
    date: dayjs(),
  };

  let context = new ChCalender(document.getElementById('root')!, options);

  // 渲染数据
  function renderData() {
    context.data([]);
  }
}
main();
