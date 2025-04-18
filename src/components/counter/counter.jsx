// Magic UI
import { NumberTicker } from "@/components/magicui/number-ticker"

export default function Counter({
  wrapperCss = "pb-[100px] sm:pt-[50px]",
  title = `Redefining <span class="text-primary">Digital Marketing </span> with a <br class="hidden xl:block" /> <span class="text-primary">Future-Ready</span> App Development <span class="text-primary">Company</span>!`,
  counterData = [
    ["350", "Happy Client’s"],
    ["1300", "Completed Projects"],
    ["350", "Talented Team"],
    ["600", "Satisfied Clients"],
  ],
}) {
  return (
    <section>
      <div className={`relative z-[2] ${wrapperCss}`}>
        <div className="container">
          <h2
            className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-bold leading-snug text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-evenly gap-x-5 gap-y-10 mt-10">
            {counterData?.map(([num, txt], i) => (
              <div
                key={i}
                className="text-center border-2 border-primary py-5 sm:p-5 md:p-0 rounded-lg md:border-0 md:w-auto"
              >
                <NumberTicker
                  value={num}
                  className="!text-[40px] lg:!text-[60px]"
                />
                <p className="text-[14px] sm:text-[18px] lg:text-[20px] mt-3 sm:mt-5 text-primary leading-relaxed capitalize">
                  {txt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
