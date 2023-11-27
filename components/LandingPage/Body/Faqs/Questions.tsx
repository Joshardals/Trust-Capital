import QuestionBank from "./QuestionBank";

const Questions = () => {
  return (
    <div className="space-y-6 font-sans text-navyblue">
      <div>
        <h1 className="text-lg font-bold md:text-xl md:font-semibold text-center text-darkblue">
          FAQS
        </h1>
      </div>

      <div className="text-navyblue">
        <QuestionBank
          item="1"
          question="Is the company Trust-Capital Investment registered?"
          answer="In both the UK and Singapore, Trust-Capital Investment is officially
            registered as such."
        />
        <QuestionBank
          item="2"
          question="How does Trust-Capital Investment generate revenue for its
          participants?"
          answer="A group of PROFESSIONAL with EXPERTISE in one of the largest
          financial markets in existence today, cryptocurrency, founded
          Trust-Capital Investment. Our goal is to consistently and daily
          generate earnings for our affiliates in these markets."
        />
        <QuestionBank
          item="3"
          question="How much can be deposited, both minimum and maximum?"
          answer=" While there is a $100 minimum deposit and a $500,000 maximum per
          deposit, you can undoubtedly make many deposits to exceed the
          $500,000 cap."
        />
        <QuestionBank
          item="5"
          question="What is the withdrawal amount's maximum and minimum?"
          answer="The minimum amount for withdrawal is $1. There is no maximum limit
          for withdrawal."
        />
        <QuestionBank
          item="6"
          question="How many times can a plan be used?"
          answer="A plan's maximum usage is as follows: the Beginners plan is limited to four uses;
           the Advanced plan is limited to four uses; the Professional plan is unlimited;
           the Promo plan is unlimited; the Master plan is unlimited; and the Special plan is unlimited."
        />
        <QuestionBank
          item="7"
          question="How much time does it take to apply my deposit?"
          answer="For cryptocurrency deposits, your money is automatically added after three network confirmations; 
          however, for payments made with PM, AdvCash, and Payeer, your money is added as soon as the funds are received."
        />
        <QuestionBank
          item="8"
          question="Is my principle deposit refundable?"
          answer="Yes, as soon as your investment is complete, your principal deposit is 
          promptly returned to your balance."
        />
        <QuestionBank
          item="9"
          question="How may my payment address be changed?"
          answer="After logging into your account, select the Settings button from the menu to modify the address where your payment withdrawal will be made. After entering your new payment address, save the adjustments."
        />
        <QuestionBank
          item="10"
          question="Is my principle deposit refundable?"
          answer="Yes, as soon as your investment is complete, your principal deposit is 
          promptly returned to your balance."
        />
        <QuestionBank
          item="11"
          question="How can my account email be changed?"
          answer="We do not permit users to modify their email address after registering for security reasons. Please get in touch with our help if you want to modify your email address, and we will take care of it for you."
        />
        <QuestionBank
          item="12"
          question="Does referring new members require me to make a deposit?"
          answer="No, there is no deposit required for you to participate in our referral scheme."
        />
        <QuestionBank
          item="13"
          question="Is it possible to register more than one account on the same PC?"
          answer="No, you cannot have more than one account."
        />
        <QuestionBank
          item="14"
          question="How do I get in touch with your help?"
          answer="By using the Contact Us tab, you can get in touch with our help. We provide email and a contact form for support."
        />
      </div>
    </div>
  );
};

export default Questions;
