import styles from "../styles/Home.module.css";

const RelativeLength = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="header-unit">
          <h1 className={styles.title}>Relative Length!</h1>
          <div className="flex flex-col w-full  my-8">
            <div className="font-semibold">
              หน่วยที่มีขนาดขึ้นอยู่กับขนาดของ property ตัวอื่นๆ{" "}
            </div>
          </div>
          <div id="em">
            <div className="flex w-full border-b ">
              <h1 className="font-bold text-[1.25em]">em</h1>
            </div>
            <div className="mt-3 text-[1em]">
              หน่วย em ขนาดของมันจะขึ้นอยู่กับขนาด ของ font ของ element นั้นๆ
            </div>
          </div>

          <div id="rem">
            <div className="flex w-full border-b ">
              <h1 className="font-bold text-xl">rem</h1>
            </div>
            <div className="mt-3">
              หน่วยที่ขึ้นกับขนาดของ font ใน root element
            </div>
          </div>
        </div>

        <h1 className="text-[50px] text-center">Example</h1>
        <div className="flex w-full justify-center mt-5">
          <div className="grid grid-cols-3 gap-20">
            <div className="grid grid-cols-1 gap-2">
              <div className="font-bold text-[18px]">Font size px</div>
              <div className="text-[12px]">font-size:12px</div>
              <div className="text-[14px]">font-size:14px</div>
              <div className="text-[18px]">font-size:18px</div>
              <div className="text-[24px]">font-size:24px</div>
            </div>
            <div className="grid grid-cols-1 gap-2 text-[16px]">
              <div className="font-bold text-[1.125em]">Font size em</div>
              <div className="text-[0.75em]">font-size:0.75em</div>
              <div className="text-[0.875em]">font-size:0.875em</div>
              <div className="text-[1em]">font-size:1em</div>
              <div className="text-[1.125em]">font-size:1.125em</div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="font-bold text-lg">Font size rem</div>
              <div className="text-xs">font-size:0.75rem</div>
              <div className="text-sm">font-size:0.875rem</div>
              <div className="text-base">font-size:1rem</div>
              <div className="text-lg">font-size:1.125rem</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RelativeLength;
