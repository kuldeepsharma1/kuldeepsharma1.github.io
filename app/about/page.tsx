import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";


export default function Page() {
  return (
    <div className="">
      <TabSwitch
        index={2}
        primaryTab={{
          title: "About",
          count: 2,
          description: "I am a IT student and developer who is passionate about entrepreneurship. and I loves to explore new technologies. I am currently developing cool projects."
        }}
       
        primaryChildren={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen">
        
          </div>
        }
     
      />
    </div>
  );
};