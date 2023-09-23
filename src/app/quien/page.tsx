import { Disclaimer } from "@/ui/atoms";
import Typewriter from "@/ui/atoms/typewritter";
import Image from "next/image";

export default async function QuienHomePage() {
  const avatarURL =
    "https://ehgwwzsrzlymozphrlyk.supabase.co/storage/v1/object/public/images/users/bacaxnot-2.png";
  return (
    <article className="mt-3 grid gap-8 @container">
      <Typewriter
        entries={["¿quién le pregunt", "¿quién soy...?"]}
        className="text-3xl"
      />
      <section className="grid gap-10 @2xl:grid-cols-[1fr,min-content]">
        <p className="basis-80 text-right">
          es una excelente pregunta, me la hago con frecuencia... espero tener
          la respuesta antes de morir [música dramática de fondo]. por el
          momento, puedo hablar de lo que socialmente me identifica: un
          apasionado por la tecnología que, por alguna extraña razón estudió
          ingeniería civil y ahora se dedica a tratar de transformar la realidad
          latinoamericana con sinfonías de código binario (#elpoeta), y en el
          proceso, quizá, entender el maravilloso sinsentido de existir. un
          ingeniero {"civiln't"} amante de la inteligencia artificial,
          blockchain y la belleza inesperada de la realidad.
        </p>
        <div className="grid justify-items-center gap-2">
          <div className="relative h-[300px] w-[300px]">
            <Image
              src={avatarURL}
              fill
              alt="bacaxnot"
              className="object-contain"
            />
          </div>
          <Disclaimer>
            claramente no soy yo, yo soy más atractivo; es un avatar creado con
            i.a. próximamente: un modelo tridimensional que narre este párrafo
            mientras se pierden en mi profunda mirada.
          </Disclaimer>
        </div>
      </section>
    </article>
  );
}
