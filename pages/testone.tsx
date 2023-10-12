import { useState } from 'react';
import { TextInput, Text, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

//internal
import { Permutations } from '../components/Permutations';
import ButtonSaveBack from '../components/Button/ButtonSaveBack';

const TestOne = () => {
  const form = useForm({
    initialValues: {
      value: '',
    },
  });
  const [value, setValue] = useState<string | string[]>('');
  const handleSubmit = (data: typeof form.values) => {
    setValue(Permutations(data.value));
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
        <div className="">OutPut : {value.toString()}</div>
      </form>
    </>
  );
};

export default TestOne;
