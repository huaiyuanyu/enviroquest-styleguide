import Image from 'next/image';

const LogoStyleGuide = () => {
  return (
    <div className="mt-[50px]">
      <h1 className="text-2xl font-bold mb-6">Logo Style Guide</h1>

      {/* Logo Variations */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Logo Variations</h2>

        {/* First Grid: Circle Logos */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="mx-auto">
            <Image src="/images/fullcolor.png" alt="Full Color Logo" width={300} height={300} layout='responsive' />
            <p className="mt-2 text-center">Full Color</p>
          </div>
          <div className="mx-auto">
            <Image src="/images/graystyle.png" alt="Grayscale Logo" width={300} height={300} layout='responsive' />
            <p className="mt-2 text-center">Grayscale</p>
          </div>
          <div className="mx-auto">
            <Image src="/images/black&white.png" alt="Black Logo" width={300} height={300} layout='responsive' />
            <p className="mt-2 text-center">Black & White</p>
          </div>
        </div>

        {/* Second Grid: Primary Logo */}
        <div className="flex justify-center mb-4">
          <div>
            <Image src="/images/EnviroQuest.png" alt="Primary Logo" width={600} height={600} layout='responsive' />
            <p className="mt-2 text-center">EnviroQuest</p>
          </div>
        </div>

        {/* Third and Fourth Grid: Horizontal and Vertical Logos */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex justify-center">
            <div>
              <Image src="/images/horizontal.png" alt="Horizontal Full Color Logo" width={600} height={200} layout='responsive' />
              <p className="mt-2 text-center">Horizontal Full Color</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src="/images/vertical.png" alt="Vertical Full Color Logo" width={400} height={600} layout='responsive' />
              <p className="mt-2 text-center">Vertical Full Color</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rationale Behind Logo Design */}
      {/* Rationale Behind Logo Design */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4">Logo Design Rationale</h2>
  <p>
    {'EnviroQuest logo is crafted with intention. The tree stands as a representation of the environment, alluding to the "Enviro" part of the app\'s name. Green and blue are emblematic of the Earth\'s natural elements: land and water. These colors not only resonate with the environmental theme of the app but also suggest calmness, focus, and clarity - essential attributes when engaging in educational activities.'}
  </p>
</section>


    </div>
  );
};

export default LogoStyleGuide;
