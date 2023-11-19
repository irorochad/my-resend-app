import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface VercelInviteUserEmailProps {
    username: string;
    email: string;
  }
  
  export const WelcomeEmail = ({ username, email }: VercelInviteUserEmailProps) => {
    const invitedByUsername = "Iroro Chadere";
    const invitedTwitterLink = "https://twitter.com/iroro_chad";
    const inviteLink = "https://vercel.com/teams/invite/foo";
    const previewText = `${invitedByUsername} has just invited you to test our app`; // what the user sees before clicking on the email.
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans ">
            <Container className="border border-solid border-[#eaeaea] rounded my-8 mx-auto w-[465px] leading-4">
              <Section className="mt-[32px]">
                <Img
                  src="/vercel.svg"
                  width="140"
                  height="80"
                  alt="Vercel logo"
                  className="my-0 mx-auto"
                />
              </Section>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0 leading-normal">
                Welcome to our test project with <strong>Resend!</strong>
              </Heading>
              <Text className="text-black text-[14px] ">Hello {username},</Text>
              <Text className="text-black text-[14px] ">
                We're happy to have you onboard!
              </Text>
              <Text className="text-black text-[14px] ">
                <strong>{invitedByUsername}</strong> has created this to show how
                we can send emails with Resend and react.email
              </Text>
  
              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                 
                  className="bg-[#000000] rounded text-white text-[12px] p-7 font-semibold no-underline text-center"
                  href={inviteLink}
                >
                  Share on Twitter!
                </Button>
              </Section>
              <Text className="text-black text-[14px] ">
                or copy and paste this URL into your browser:{" "}
                <Link href={inviteLink} className="text-blue-600 no-underline">
                  {inviteLink}
                </Link>
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px]">
                This invitation was intended for{" "}
                <span className="text-black">{email} </span>.This invite was sent
                by{" "}
                <span className="text-black">
                  (
                  <Link
                    href="https://twitter.com/iroro_chad"
                    className="text-blue-600 no-underline"
                  >
                    {invitedTwitterLink}
                  </Link>
                  )
                </span>{" "}
                If you were not expecting this invitation, you can ignore this
                email. If you are concerned about your account's safety, please
                reply to this email to get in touch with us.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default WelcomeEmail;