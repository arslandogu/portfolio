import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Programmer',
        2000,
      ]}
      speed={30}
      className='text-[3rem] mobile:text-[2.2rem] mobile:whitespace-wrap font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;