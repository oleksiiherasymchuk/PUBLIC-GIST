import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import React from 'react';
import s from './App.module.css'

const App = () => {
  const onFinish = (values) => {
    alert(`Ви можете купити ${(values.dol / values.bit).toFixed(7)} BTC!`);
  };
  return (
    <div>
       <p className={s.title}>IT Generation task from Prog Academy!</p>
    <Form
      onFinish={onFinish}
      className={s.form}
    >
      <Form.Item label="Kурс Bitcoin" name='bit'>
         <InputNumber min={0} placeholder="Введіть курс Bitcoin" controls={false}/>
       </Form.Item>
       <Form.Item label="Cумa доларів" name="dol">
         <InputNumber min={0} placeholder="Введіть суму доларів" controls={false}/>
       </Form.Item>
        <Button type="primary" htmlType="submit">
          Отримати
        </Button>
    </Form>
    </div>
  );
};

export default App;


// // Задача:
// // - користувач вводить курс Bitcoin до доллара
// // - користувач вводить суму доларів, що хоче поміняти на Bitcoin
// // - програма повертає кількість Bitcoin, що можна купити на вказану суму.

// // Приклад:

// // What is Bitcoin price today?
// // 21000
// // How much $ do you have?
// // 1000
// // You can buy 0.0476190 BTC