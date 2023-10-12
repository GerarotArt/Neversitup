import { useState } from 'react';
import { Text, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

//internal
import { CountSmileys } from '../components/CountSmileys';
import ButtonSaveBack from '../components/Button/ButtonSaveBack';

const TestThree = () => {
  const [value, setValue] = useState(0);

  const form = useForm({
    initialValues: {
      value: '',
    },
    validate: {
      value: (val) =>
        /^(?:\D+,)*\D+$/.test(val) ? null : 'please input in correct',
    },
  });

  const handleSubmit = (data: typeof form.values) => {
    setValue(CountSmileys(data.value.split(',')));
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex justify-center">
          <Text className="my-auto mr-2">Input Permutations :</Text>
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

export default TestThree;
