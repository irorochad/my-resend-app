interface ThankyouType {
  username: string;
}

export const ThankYouPage = ({ username }: ThankyouType) => {
  return (
    <section className="bg-slate-900 h-screen">
      <main className=" text-gray-50 flex flex-col items-center justify-between p-24">
        <div className="text-center">
          <h1 className="text-6xl">Thank you!</h1>
          <p className="pt-4">We got your email!</p>
          <p className="mt-10">
            Hi {username}, <br /> we got the email you sent, and we'll happy to
            let you know we'd keep in touch!
          </p>
        </div>
      </main>
    </section>
  );
};
