import Image from "next/image";

export const Content = ({
  mstyle,
  heading,
  hstyle,
  content,
  data,
  cstyle,
  img,
  children,
}) => {
  return (
    <div className={`${mstyle}`}>
      <div className="flex items-center justify-center flex-col flex-wrap gap-2">
        <h1 className={`${hstyle}`}>{heading}</h1>
        <div className={`${cstyle} flex items-center justify-center flex-col gap-2`}>
          {content && <p>{content}</p>}
          {data &&
            data.map((e,idx) => {
              return <p key={idx}>{e}</p>;
            })}
        </div>
        {img && (
          <Image src={img} alt="Car Image" width="800" height="800" className="p-8"></Image>
        )}
        {children}
      </div>
    </div>
  );
};
