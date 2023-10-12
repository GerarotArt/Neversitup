import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

const ButtonSaveBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };
  return (
    <>
      <Button onClick={handleBack} className="mr-2 w-24" color="gray">
        Back
      </Button>
      <Button type="submit" className="w-24">
        Submit
      </Button>
    </>
  );
};

export default ButtonSaveBack;
