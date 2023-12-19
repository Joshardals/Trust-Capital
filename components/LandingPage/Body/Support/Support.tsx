import FeedbackForm from "@/components/forms/feedback-form";
import { Icons } from "@/components/icons";
import { useSupportStore } from "@/lib/store/store";

const Support = () => {
  const { support } = useSupportStore();
  return (
    <div
      className="font-sans text-navyblue p-5 fixed z-30 h-full w-full top-0 left-0 bg-babyblue"
      id="support"
    >
      <div className="space-y-6">
        <h1 className="text-lg font-bold md:text-xl md:font-semibold text-center text-darkblue">
          SUPPORT
        </h1>

        <div className="grid md:grid-cols-4 space-y-8 md:gap-4">
          <div className="space-y-4 col-span-2 max-md:border-b max-md:border-b-navyblue/30 max-md:pb-8">
            <div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icons.message className="h-6 w-6 text-goldenrod" />
                  <p className="font-bold text-md">Email</p>
                </div>

                <p className="ml-10 text-xs">
                  trustcapitalsInvestments@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-4 max-md:px-10 text-navyblue">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
