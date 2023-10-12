import { Text, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

//internal
import { FindTheOddInt } from '../components/FindTheOddInt';
import ButtonSaveBack from '../components/Button/ButtonSaveBack';

const TestTwo = () => {
  const [value, setValue] = useState<number | string>('');
  const form = useForm({
    initialValues: {
      value: '',
    },
    validate: {
      value: (val) =>
        /^(?:\d+,)*\d+$/.test(val) ? null : 'please input in correct',
    },
  });

  const handleSubmit = (data: typeof form.values) => {
    setValue(FindTheOddInt(data.value.split(',').map(Number)));
  };
  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex justify-center">
          <Text className="my-auto mr-2">Input Find the odd int :</Text>
          <TextInput size="xs" {...form.getInputProps('value')} />
        </div>
        <div className="flex justify-center py-2">
          <ButtonSaveBack />
        </div>
        <div className="">OutPut : {value}</div>
      </form>
    </>
  );
};

export default TestTwo;
