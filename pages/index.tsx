const MenuArray = [
  {
    label: 'Permutations',
    link: 'testone',
  },
  {
    label: 'Find the odd int',
    link: 'testtwo',
  },
  {
    label: 'Count the smiley faces!',
    link: 'testthree',
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex justify-center p-32">
        <label className="text-4xl">Neversitup Test</label>
      </div>
      {MenuArray?.map((val) => {
        return (
          <>
            <a
              href={val.link}
              className="flex justify-center items-center w-60 h-16 border border-solid rounded-xl border-black mx-auto my-4"
            >
              <label>{val.label}</label>
            </a>
          </>
        );
      })}
    </main>
  );
}
