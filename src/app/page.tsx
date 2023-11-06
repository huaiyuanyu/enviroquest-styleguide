import Image from 'next/image'

export default function Home() {

  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum incidunt, nulla ea nostrum maxime voluptatem neque tempore impedit minima libero accusantium odit sed dicta a beatae voluptatibus dolores pariatur.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/images/EnviroQuest.png" alt="Primary Logo" width={600} height={600} />
    </main>
  )
}
