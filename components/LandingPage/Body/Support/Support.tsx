import FeedbackForm from "@/components/forms/feedback-form";
import { Icons } from "@/components/icons";

const Support = () => {
  return (
    <div className="font-sans text-navyblue" id="support">
      <div className="space-y-6">
        <h1 className="text-lg font-bold md:text-xl md:font-semibold text-center text-darkblue">
          SUPPORT
        </h1>

        <div className="grid md:grid-cols-4 space-y-8 md:gap-4">
          <div className="space-y-4 col-span-2">
            <div className="flex items-center space-x-4">
              <Icons.map className="h-6 w-6 text-puregreen" />
              <p className="font-bold text-md">Location</p>
            </div>

            <div className="space-y-1">
              <p className="ml-10">
                <span className="font-bold">-</span> 18a/20 King Street,
                Maidenhead, Berkshire, United Kingdom.
              </p>
              <p className="ml-10">
                <span className="font-bold">-</span> Asia Square Tower 1,
                Tanjong Pagar, Singapore.
              </p>
              <p className="ml-10">
                <span className="font-bold">-</span> 156 2nd St, San Francisco,
                California, USA.
              </p>
            </div>

            <div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icons.message className="h-6 w-6 text-goldenrod" />
                  <p className="font-bold text-md">Email</p>
                </div>

                <p className="ml-10">support@trust-capital.ltd</p>
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
