import styles from "../styles/Home.module.css";

const AbsoluteLength = () => {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Absolute Length!</h1>

        <div className="grid grid-cols-1 mt-9 gap-6">
          <div className="flex flex-col w-full ">
            <div className="font-semibold">
              หน่วยประเภทนี้จะมีความยาวที่มีขนาดตามที่กำหนด ไม่มีการเปลี่ยนแปลง{" "}
            </div>
            <ul className="list-disc mt-3">
              <li>
                เหมาะสำหรับการใช้ใน element ที่ต้องการให้มีขนาดตามที่กำหนด
              </li>
              <li>
                แต่หน่วยแบบนี้มักมีปัญหากับการ responsive เพราะปัจจุบันหน้าจอของ
                device มีหลากหลายขนาด
                ถ้าออกแบบมาไม่ดีอาจทำให้การแสดงผลมีปัญหาในหน้าจอบางขนาดได้
              </li>
            </ul>
          </div>
          <div>
            <div className="flex w-full border-b ">
              <h1 className="font-bold text-xl">Px</h1>
            </div>
            <div className="mt-3">
              pixel หรือ หน่วยที่อ้างถึงจุด 1 จุด ในหน้าจอคอมพิวเตอร์
              เป็นหน่วยที่ใช้พบบ่อยที่สุด
            </div>
          </div>
        </div>

        <h1 className="text-[50px] text-center">Example</h1>
        <div className="flex w-full justify-center mt-5">
          <div className="grid grid-cols-3 gap-20">
            <div className="grid grid-cols-1 gap-2">
              <div className="font-bold">Font size</div>
              <div className="text-[12px]">font-size:12px</div>
              <div className="text-[14px]">font-size:14px</div>
              <div className="text-[18px]">font-size:18px</div>
              <div className="text-[24px]">font-size:24px</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold">Padding</div>
              <div className="p-[2px] bg-green-300">
                <div className="bg-white">frame</div>
              </div>
              <div className="p-[8px] bg-green-300">
                <div className="bg-white">frame</div>
              </div>
              <div className="p-[12px] bg-green-300">
                <div className="bg-white">frame</div>
              </div>
              <div className="p-[16px] bg-green-300">
                <div className="bg-white">frame</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold">Margin</div>
              <div className=" bg-green-300">
                <div className="m-[2px] bg-white">frame</div>
              </div>
              <div className=" bg-green-300">
                <div className="m-[8px] bg-white">frame</div>
              </div>
              <div className=" bg-green-300">
                <div className="m-[12px] bg-white">frame</div>
              </div>
              <div className=" bg-green-300">
                <div className="m-[16px] bg-white">frame</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AbsoluteLength;
