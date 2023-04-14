import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Legal() {
  return (
    <>
      <Head>
        <title>Legal Disclaimer</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Legal Disclaimer</h1>
        </div>

        <section>
          <h2>General Information</h2>
          <p>
            The content provided on this website is for informational purposes
            only. failfast is a non-profit collective of individuals and not a
            registered company or legal entity. We aim to share our projects,
            tools, and resources related to AI-driven development and
            innovation.
          </p>
        </section>
        <section>
          <h2>No Warranties or Representations</h2>
          <p>
            All information on this website is provided "as is" without any
            warranties or representations, either express or implied. We make no
            guarantees regarding the accuracy, reliability, or completeness of
            the content provided. Use of the information on this website is at
            your own risk.
          </p>
        </section>
        <section>
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall failfast or its members, contributors, or
            affiliates be liable for any direct, indirect, incidental, special,
            consequential, or punitive damages, including but not limited to,
            loss of profits, data, use, goodwill, or other intangible losses,
            resulting from (i) your access to or use of, or inability to access
            or use, the website; (ii) any conduct or content of any third party
            on the website, including without limitation, any defamatory,
            offensive or illegal conduct of other users or third parties; (iii)
            any content obtained from the website; and (iv) unauthorized access,
            use or alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence), or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed its essential purpose.
          </p>
        </section>
        <section>
          <h2>External Links</h2>
          <p>
            This website may contain links to external sites. We are not
            responsible for the content or privacy practices of these sites.
            Users are encouraged to review the privacy policies of any external
            sites they visit.
          </p>
        </section>
        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text,
            images, videos, and logos, is the property of failfast or its
            content contributors. Unauthorized use, reproduction, or
            distribution of this content is strictly prohibited without written
            permission from the respective owner(s).
          </p>
        </section>
        <section>
          <h2>Privacy</h2>
          <p>
            We do not track users or collect any personal information from
            visitors to our website. We are committed to respecting the privacy
            of our users. If your website uses cookies, please refer to our
            Cookie Policy for information about the types of cookies used, their
            purpose, and how users can manage their cookie preferences.
          </p>
        </section>
        <section>
          <h2>Changes to this Disclaimer</h2>
          <p>
            We reserve the right to modify or update this legal disclaimer at
            any time without notice. By continuing to use this website, users
            agree to the current version of the disclaimer.
          </p>
        </section>
        <section>
          <h2>Contact Information</h2>
          <p>
            If you have any questions, concerns, or requests, please feel free
            to contact us at [provide your contact email or other contact
            information].
          </p>
        </section>
      </main>
    </>
  );
}
