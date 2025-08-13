import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="py-4 lg:py-6 bg-navy-light flex items-center">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-start">
          <div className="text-center space-y-2 lg:space-y-3 order-1">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold animate-fade-in tracking-tight">
              SAVE YOUR RELATIONSHIP
            </h1>
            <h2 className="text-lg sm:text-xl font-serif animate-fade-in delay-100">
              with Fred Talisman MFT
            </h2>
            <p className="text-base sm:text-lg font-sans animate-fade-in delay-200">
              Keeping Families Together and Saving Relationships for over 50 Years
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
              <Link
                href="/book"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-2 px-5 rounded-full transition-colors animate-fade-in delay-300 text-base sm:text-lg text-center"
              >
               Call or text: +1 310 429 3658
              </Link>
              <Link
                href="/calendlybooking"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-2 px-5 rounded-full transition-colors animate-fade-in delay-300 text-base sm:text-lg text-center"
              >
               Schedule a free consultation 
              </Link>
            </div>
          </div>

          <div className="animate-fade-in delay-200 flex justify-center lg:justify-center order-2 lg:order-2">
            <Image
              src="/Fred1.jpg"
              width={360}
              height={288}
              alt="Fred Talisman MFT"
              className="rounded-lg shadow-xl max-h-[240px] sm:max-h-[260px] lg:max-h-[288px] w-auto"
              priority
            />
          </div>

          <div className="text-center lg:text-left flex items-end order-3 lg:order-3">
            <h2 className="text-xl sm:text-2xl font-serif animate-fade-in delay-400 mt-3 lg:mt-0 text-gold font-bold">
              You can save your relationship, even if your partner wants to end it. Let's talk about how
            </h2>
          </div>

          <div className="space-y-1 text-center lg:text-left order-4 lg:order-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gold">
              Stop Your Breakup & Keep Your Family Together
            </h2>
          </div>
        </div>
      </header>

      <div className="bg-navy-light pb-6">
        <div className="container mx-auto px-4 flex justify-center">
          <p className="text-base sm:text-lg text-center max-w-4xl text-white/90">
            I've helped countless people who were on the verge of losing their relationship to stop their breakup even if they feared it was beyond saving, and even if they were the only one who wants to save it. I am pro-marriage, pro-relationship, and pro-family. If I'm your last hope, you owe it to yourself and your family to give me a call now.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
   

        <section className="mb-16 animate-slide-in">
          <div className="bg-navy-light p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-4 text-gold">Free Phone Consultation</h3>
            <p className="text-lg mb-4">
              Call or text me now on my cell:{" "}
              <a href="tel:+13104293658" className="text-gold hover:text-gold-light transition-colors">
                +1 310 429 3658
              </a>
              , or{" "}
              <a href="/calendlybooking" className="text-gold hover:text-gold-light transition-colors">
                Schedule a free consultation
              </a>
              , or email me at{" "}
              <a href="mailto:Fred@fredtalisman.com" className="text-gold hover:text-gold-light transition-colors">
              Fred@FredTalisman.com
              </a>
              . I'm glad to speak with you for several minutes for free and answer some of your biggest concerns. Can I
              help you save your relationship and help you to keep your family together? Probably. The best way to know
              if I can help you is for us to have a conversation. Call me now. I'm glad to spend some time talking to
              you. Once I hear about your situation I can tell you how I can help you.
            </p>
            <h4 className="text-xl font-serif font-bold mb-2 text-gold">Find Out How To</h4>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>Get past infidelity and rebuild trust</li>
              <li>Get a last chance with your partner</li>
              <li>Turn around a partner who says that they are done with you and they want to end the relationship</li>
              <li>Navigate the process if your partner refuses to get help with you</li>
            </ul>
            <p className="text-lg mb-4">
              I can often be reached within 10 minutes, if I'm not in session, on my cell phone at{" "}
              <a href="tel:+13104293658" className="text-gold hover:text-gold-light transition-colors">
                +1 310 429 3658
              </a>
              . If I'm in session & you leave a message, I'll call you back on my first break. I understand and respect
              the fact that you're urgently trying to save your relationship and keep your family together and that you
              need to make contact with me as soon as possible.
            </p>
            <p className="text-lg mb-4">
              Call or text me anytime 24/7. I put my phone on do not disturb before we go to bed so you don't have to
              worry about waking us up.
            </p>
            <p className="text-lg mb-4">Same-day appointments may be available.</p>
            <p className="text-lg mb-4">Evenings & Weekend Appointments are available.</p>
            <p className="text-lg">Sessions in person, Zoom, by FaceTime, WhatsApp, or phone.</p>
          </div>
        </section>

        <section className="mb-16 animate-slide-in">
          <h2 className="text-4xl font-serif font-bold text-center mb-8 text-gold">
            Success Stories
          </h2>
          <div className="space-y-8">
            {/* First Review */}
            <div className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative">
                <span className="absolute -top-3 -left-3 text-white/20 text-6xl font-serif">"</span>
                <h3 className="text-3xl font-serif font-bold mb-4 text-gold">
                  Saved after infidelity
                </h3>
                <p className="text-lg mb-4 text-white/90">
                  "By the time I found Fred Talisman, Cindy was ready to break up with me. I was devastated. She is the
                  person I love more than anyone. She is my soul mate. She felt that she could never trust me again and
                  that she could never forgive me. Before I found Fred, I had tried other things and spoke to other
                  people, but not only were their methods ineffective, some actually made things worse with her! I saw
                  couples counseling with Fred as my last resort but she wouldn't do it with me. I worked with Fred on my
                  own while working with his home study course, 'Save Your Relationship.' I'm not geographically close to
                  Fred's office, so I worked with him by phone. To my amazement, working with Fred by phone was more
                  valuable than any help I've gotten in person. Thanks to Fred, she gave me a last chance. Fred gave me
                  hope beyond hope. I was impressed with his depth of understanding and compassion. I saw the first
                  improvements with her almost immediately after the first session I did with Fred. Cindy and I got
                  married almost a year after the crisis that Fred got us through. Using the things that Fred taught me,
                  my wife and I are now stronger than ever as a couple. Our relationship gets better everyday. And that's
                  not all! She is now pregnant going on 20 weeks! I am so incredibly excited about what this little life
                  will become. We are ecstatic. Everything is working really well. It's amazing. I'm very grateful and
                  thankful for all of Fred's incredible help. The skills he taught me have also improved every other
                  relationship in my life, including my friends, relatives, work mates and casual acquaintances. If
                  everyone learned Fred's skills and put them into practice, the world would be a much better place. I
                  really can't thank Fred enough and by the grace of God, I am on a much better track now with my wife.
                  Fred not only showed me how to save my relationship. He also forever changed my life for the better.
                  What I got from Fred is the most valuable help I have ever received."
                </p>
                <p className="text-lg font-semibold text-gold mb-4">-Dennis Hart</p>
                <Link 
                  href="/success-stories"
                  className="text-gold hover:text-gold-light transition-colors underline inline-flex items-center gap-2"
                >
                  Read more success stories 
                  <span className="text-white/70">→</span>
                </Link>
              </div>
            </div>

            {/* Second Review */}
            <div className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative">
                <span className="absolute -top-3 -left-3 text-white/20 text-6xl font-serif">"</span>
                <h3 className="text-3xl font-serif font-bold mb-4 text-gold">
                  The Relationship Wizard
                </h3>
                <p className="text-lg mb-4 text-white/90">
                  "Fred Talisman, a licensed marriage counselor for over 48 years, saves and revives a dying
                  relationship. How does he do it? Well he's not the stereotypical marriage counselor who sits back and
                  says "uh huh" and watches couples get more and more polarized as they further talk themselves out of
                  their relationship by giving their laundry list of built up hurts and resentments. If a couple is
                  drowning, he's the lifeguard and he jumps in and does whatever it takes to save them, to buy them a
                  second chance, a turning point. I think he's a brilliant strategist. He uses his strategies to turn
                  around years of pain. He uses them to defuse years of tension. He uses them to get the couple
                  reconnected to the love and magic that brought them together in the first place. He demonstrates to them
                  a path, a hope, a vision of the possibility of actually thriving together. To me, Fred is The
                  Relationship Wizard. His ability to save dying relationships are his brilliance and magic. He forged it
                  out of the heartbreak he witnessed countless times in his early years as a traditionally trained
                  marriage counselor, experiencing over and over how that training was grossly inadequate in assisting him
                  to save couples in crisis. He's a practical man. He knows from hard experience that by the time most
                  couples go to a marriage counselor one or both may be ready to end the relationship and the window of
                  opportunity to save that relationship is now, or never. When it comes to saving a relationship he's a
                  bulldog. If there is a way to do it, he won't let go until he finds it. I think his strategies are a
                  gift to couples."
                </p>
                <p className="text-lg font-semibold text-gold mb-4">-Joel Roberts, Former Prime Time Host, KABC Radio</p>
                <Link 
                  href="/about"
                  className="text-gold hover:text-gold-light transition-colors underline inline-flex items-center gap-2"
                >
                  Learn more about Fred 
                  <span className="text-white/70">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 animate-slide-in">
          <h3 className="text-3xl font-serif font-bold mb-6 text-gold">
            Which of the following describes your situation?
          </h3>
          <p className="text-lg mb-6">
            I help to address and resolve the following issues. Which of the following describes you, your partner, or
            your situation:
          </p>
          <div className="bg-navy-light p-6 rounded-lg shadow-lg">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Infidelity",
                "Broken Trust",
                "Love But Not In Love",
                "Partner Wants To Break Up",
                "Partner Wants Separation",
                "Feeling Broken",
                "Partner In Love With Someone Else",
                "Bickering/Fighting/Verbal Abuse",
                "Broken Hearted",
                "Feel Like You're Walking On Eggshells With Your Partner",
                "Anger Management",
                "Lack Of Communication",
                "Don't Feel Heard or Understood",
                "Partner Acts Like You're Never Good Enough",
                "Partner Doesn't Understand or Have Compassion for the Demands on You and the Pressure That You're Under",
                "Feel Judged and Criticized",
                "Partner Gaslights",
                "Partner is a Narcissist",
                "Already Separated",
                "Lack of Respect, Kindness, Appreciation and/or Emotional Support",
                "Lying",
                "Don't Keep Agreements",
                "Hard To Get Over The Past",
                "Don't Get Genuine Apologies",
                "Issues Don't Get Addressed or Resolved",
                "Needs Not Being Met",
                "Tries to Turn Family and Friends Against You",
                "Staying Just For The Kids",
                "Disagree About Parenting",
                "Feel Hopeless, Powerless and/or Despondent",
                "Feel Disappointed In Yourself and/or In Your Partner",
                "Feel Like You're Letting Your Kids Down",
                "Treated Poorly In Front of Kids, Family and/or Friends",
                "Partner Doesn't Know or See Your Specialness",
                "Feel Taken Advantage Of",
                "Dread Coming Home or Being Home When Your Partner is Present",
                "Have Little In Common",
                "Blended Family/Step Children",
                "Ex Spouse or In Law Problems",
                "Pornography",
                "Jealousy",
                "Lack Of Attraction",
                "Midlife Crisis",
                "Lack of Affection and Intimacy",
                "Infrequent Or No Sex",
                "Loss Of Personal Freedom",
                "Too Controlling/Possessive",
                "Can't Leave Work At Work",
                "Long Distance Relationship",
                "Grieving For Loss Of Loved One",
                "Alcohol/Substance Abuse",
                "ADHD",
                "Depression/Anxiety/Stress",
                "Adults Abused As Children"
              ].map((issue, index) => (
                <span 
                  key={index}
                  className="bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full text-base md:text-lg hover:shadow-lg transition-all font-bold"
                >
                  {issue}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 animate-slide-in">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
            {/* Images Column */}
            <div className="w-full md:w-[38.5%] lg:w-[38.5%] space-y-8">
              <Image
                src="/couple.jpg"
                width={720}
                height={540}
                alt="Happy couple embracing"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                priority
              />
              <Image
                src="/couple2.jpg"
                width={720}
                height={540}
                alt="Happy couple together"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-[61.5%] lg:w-[61.5%] space-y-6">
              <h3 className="text-4xl font-serif font-bold text-gold">
                Am I your best hope to help you to save your relationship?
          </h3>
              <div className="text-xl space-y-4">
            <p className="text-xl">
              I imagine it's really hard and maybe a little bit scary for you to decide who to get help from. You may
                  feel that couples counseling is your last hope but you may also know of people who went to a marriage
              counselor and they felt the marriage counselor did more harm than good or wound up ending their
              relationship.
            </p>
            <p className="text-xl">
              I'm going to briefly tell you about me and how I work so that you have enough information to determine if
              I'm the one that's most likely to be able to help you to save your relationship.
            </p>
            <p className="text-xl">
              For over 50 years I've specialized in saving relationships that were on the verge of ending even when only
                  one person still wanted the relationship to work and even when they had no hope that it could be saved and even when their partner wasn't willing to get help with them. I
              am happy to help you to rescue your relationship.
            </p>
            <p className="text-xl">
              It's my passion to save relationships, to keep families together and to make the relationship work for
              both people.
            </p>
            <p className="text-xl">
                  You probably know of people who went to couples counseling and it wound up ending their relationship.
            </p>
            <p className="text-xl">
                  When a relationship is in crisis, it's in a very delicate state. Couples counseling is not neutral. If
              done correctly it can make the difference between saving your relationship and your relationship ending.
              If done incorrectly, it can push the relationship over the edge.
            </p>
                <p className="text-xl">All marriage counselors and relationship coaches have their biases.</p>
            <p className="text-xl">
              Some marriage counselors think that if a relationship isn't working, a person should get out. They'll tend
                  to guide an individual or couple in that direction. I think of them as <span className="font-bold text-gold">relationship enders</span>.
            </p>
            <p className="text-xl">
              In my experience, that first session with a couple, especially when a person has already told their
              partner they want to break up, is a very delicate, critical time.
            </p>
            <p className="text-xl">
                  <span className="font-bold text-gold">I'm a family and relationship saver.</span> It's my passion to save relationships, to keep families together and
              to make the relationship work for both people.
            </p>
              </div>
            </div>
          </div>
        </section>

        <a 
            href="https://www.instagram.com/fred_talisman/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8 bg-gold p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-center gap-4">
              <svg 
                className="w-8 h-8 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-lg font-bold">
                Follow me on Instagram for daily relationship advice
              </span>
            </div>
          </a>

        <section className="mb-16 animate-slide-in">
          <h3 className="text-4xl font-serif font-bold mb-6 text-gold">
            Can your relationship be saved?
          </h3>

       
          <div className="space-y-6">
            <p className="text-xl">
              If you're like many people who've contacted me for help, you might be thinking that it's just too late to
              save your relationship if your partner has threatened to break up.
            </p>
            <p className="text-xl">
              So, can your relationship be saved? In my experience, most relationships end unnecessarily and the breakup
              could have been prevented with the right kind of help.
            </p>
            <p className="text-xl">
              If your partner isn't willing to get help with you, is your relationship doomed?
            </p>
            <p className="text-xl">
              Here's my question for you. How many people in a relationship does it take to save the relationship?
              Obvious answer, right? It takes two people to save a relationship. Of course. Right?…WRONG! It takes a
              minimum of <span className="font-bold text-gold">one person</span>, not both, to save a relationship and to keep a family together.
            </p>
            <p className="text-xl">
              With so many of the relationships I've helped, including the ones that were in crisis when I first got
              involved, I've only worked with one person. They took what I gave them and successfully stopped their
              breakup and reconciled their relationship.
            </p>
            <p className="text-xl">
              I would have been happy to work with them as a couple. It just wasn't an option because their partner
              wasn't willing to join us in the process. I'm a realist. I have a mission to help you to save your
              relationship and to keep your family under one roof. I work with what I have to work with.
            </p>
            <p className="text-xl">
              In my 50+ years of saving relationships, I have helped to save lots of relationships
              where only one person got my direct help.
            </p>
            <p className="text-xl mb-6">
              If you like what you're reading then give me a call on my cell, schedule a free consultation, or email me at{" "}
              <a 
                href="mailto:fred@fredtalisman.com" 
                className="text-gold hover:text-gold-light transition-colors"
              >
                fred@fredtalisman.com
              </a>
              , or text me.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:justify-center">
              <Link
                href="tel:+13104293658"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-4 px-10 rounded-full transition-colors text-xl text-center underline hover:no-underline"
              >
                Call or text me: +1 310 429 3658
              </Link>
              <Link
                href="/calendlybooking"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-4 px-10 rounded-full transition-colors text-xl text-center underline hover:no-underline"
              >
                Schedule a free consultation
              </Link>
            </div>
            <p className="text-xl">
              Please keep in mind that I can communicate with you a lot more effectively by phone or texting than I can
              by email. Also, I check my phone at every break. I check my email a lot less often.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-slide-in">
          <h3 className="text-4xl font-serif font-bold mb-6 text-gold">
            What should you do next?
          </h3>
          <div className="space-y-6">
            <p className="text-xl">
              Here's my first piece of advice to you. If from what you just read you think I might be your best or last hope,
               call me right now to take the first step. It doesn't matter what time it is. When I stop working
              for the day I turn my phone off so you're not going to wake up myself or my wife. If you call during my
              waking hours and I'm doing a session, it goes right to voice mail so you're not going to disturb me. DO
              leave a message.
            </p>
            <p className="text-xl">
              I will call you back at my first break. I understand and respect the fact that you're urgently trying to
              save your relationship and to keep your family together and that you need to make contact with me as soon
              as possible.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-slide-in">
          <h3 className="text-4xl font-serif font-bold mb-6 text-gold">
            PS: When is it too late for a relationship to be saved and when is a relationship definitely over?
          </h3>
          <div className="space-y-6">
            <p className="text-xl">
              In my experience, the one timing when a relationship is definitely over is when the person that wanted to save 
              the relationship gives up. Because, then there is no advocate in the relationship to rescue it. So, whether your 
              partner is willing to get help with you or whether you are the only one in the relationship who 
              is trying to save it, call me. I will give you my professional opinion if I think I can help you to save it.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}