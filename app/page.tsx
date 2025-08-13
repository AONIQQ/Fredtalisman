import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "./components/TestimonialCarousel";

// Decorative divider component
const SectionDivider = () => (
  <div className="flex items-center justify-center py-6 my-2">
    <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    <div className="mx-3">
      <div className="w-2 h-2 rounded-full bg-gold transform rotate-45"></div>
    </div>
    <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
  </div>
);

// Basic Contact Form component (replace with actual implementation if available)
const ContactForm = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-white/80">Name *</label>
      <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold sm:text-sm text-white" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-white/80">Email *</label>
      <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold sm:text-sm text-white" />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-white/80">Phone Number *</label>
      <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold sm:text-sm text-white" />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
      <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold sm:text-sm text-white"></textarea>
    </div>
    <button type="submit" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-2 px-5 rounded-full transition-colors text-base sm:text-lg">
      Send Message
    </button>
    <p className="text-xs text-white/60">We respect your privacy. Your information is confidential.</p>
  </form>
);


export default function Home2() {
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Above Fold Section - Mobile Focused */}
      <section className="bg-navy-light py-2 px-2 text-center flex flex-col items-center space-y-1.5 sm:space-y-2 md:space-y-2.5">

        {/* Emotional Hook - Increased base size */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mt-1 mb-0.5">
          Is Your Relationship on the Brink?
        </h2>

        {/* Short Impact Statement - Base size text-sm */}
        <p className="text-sm md:text-base max-w-lg md:max-w-xl mx-auto text-white/80 mb-1 px-1">
          I'm a licensed marriage & family therapist. For 25+ years, I've helped thousands of clients to save their relationship — even when only one partner wanted help, even after: infidelity; years of fighting & disrespect.
        </p>

        {/* Proof CTA - Updated text and size */}
        <Link href="/success-stories" className="text-gold hover:text-gold-light transition-colors underline text-lg font-semibold mb-1.5 md:mb-2">
          Relationship Saving Success Stories
        </Link>

        {/* Credibility Boost / Curiosity Hook - Updated Text and Size */}
        <div className="pt-1 md:pt-1.5 pb-0.5 text-center text-sm md:text-base space-x-1.5 md:space-x-2">
           <Link href="/about" className="text-gold hover:text-gold-light transition-colors underline text-lg font-semibold">
           Why my unique relationship saving approach works when many therapists fail.
           </Link>
        </div>

        {/* Reassurance & Real-World Proof - Updated Text and Size */}
        <div className="pt-0.5 md:pt-1 pb-0.5 space-y-0.5 max-w-lg md:max-w-xl mx-auto text-center">
            {/* Updated text */}
            <p className="text-sm md:text-base text-white/90">Do you fear getting help might make things worse?</p>
            {/* Reverted base size - Updated text */}
            <p className="text-xs sm:text-sm md:text-base text-white/80">That was Nicole & Jake – until they found me.</p>
            {/* Updated link text and size */}
            <Link href="#nicole-jake" className="text-gold hover:text-gold-light transition-colors underline text-lg font-semibold block"> 
               Fred saved us after our last counselor told us we should split.
            </Link>
        </div>

        {/* Final Emotional Anchors - Base text-sm */}
        <div className="pt-1 md:pt-1.5 pb-1.5 md:pb-2 space-y-0.5 text-sm md:text-base text-white/90 font-semibold max-w-lg md:max-w-xl mx-auto">
            <p>You've seen it before: couples therapy that made things worse.</p>
            <p>I'm not a relationship ender. I'm a relationship saver.</p>
            <p>I'm Pro-marriage. Pro-relationship. Pro-family.</p>
        </div>
        
        {/* Moved Call-to-Action Buttons - Updated phone number & hide booking on mobile */}
        <div className="flex flex-col gap-1.5 md:gap-2 w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto pt-1.5 md:pt-2 pb-1">
          <a 
            href="tel:13105893992" 
            className="block bg-gold hover:bg-gold-light text-navy font-bold py-1 md:py-1.5 px-2.5 md:px-3 rounded-full transition-colors text-sm sm:text-base md:text-lg text-center"
          >
            Call/Text/WhatsApp me:<br/>1-310-589-3992 
          </a>
          <Link 
            href="/calendlybooking"
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gold hover:bg-gold-light text-navy font-bold py-1 md:py-1.5 px-2.5 md:px-3 rounded-full transition-colors text-sm sm:text-base md:text-lg text-center"
          >
            Schedule Free Discovery Call
          </Link>
        </div>
      </section>

      {/* Below Fold Section */}
      <main className="container mx-auto px-4 py-12 space-y-16">

        {/* Availability & Top Counselor Section */}
        <section className="flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-navy-light p-6 rounded-lg shadow-lg">
          <div className="flex-shrink-0">
             {/* Using the same image as header for now, replace if a smaller specific one is available */}
            <Image
              src="/Fred1.jpg" 
              width={150} 
              height={120} 
              alt="Fred Talisman MFT"
              className="rounded-lg shadow-md w-[120px] h-auto md:w-[150px]" 
            />
          </div>
          <div className="text-center md:text-left space-y-3">
            <p className="text-lg font-semibold text-gold">Same day, Evenings & Weekend Appointments may be available.</p>
            <p className="text-base text-white/90">Sessions in person, Zoom, by FaceTime, WhatsApp, or phone.</p>
            <h3 className="text-xl font-serif font-bold text-gold pt-2">One of the Top Marriage Counselors In the Country</h3>
            <blockquote className="border-l-4 border-gold pl-4 italic text-white/80">
              "Fred Talisman is one of the top marriage counselors in the country and is on a mission to save relationships, keep families together and to show you how to make your relationship fully work for both of you. If your relationship has gotten off track or you just know there can be more, Fred can show you how to turn it all around and take things to the next level."
              <footer className="mt-2 text-sm not-italic text-white/70">– Kelli Calabrese, 2004/2007 Personal Trainer of the Year, America's Fitness, Nutrition and Lifestyle Expert</footer>
            </blockquote>
             {/* Removed emoji */}
             <Link href="/about" className="text-gold hover:text-gold-light transition-colors underline inline-flex items-center gap-1 pt-2">
                Learn more about Fred <span className="text-white/70"></span> 
             </Link>
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section className="my-16">
          <TestimonialCarousel />
        </section>

        {/* CTA Block - Simplified and Updated Phone */}
        <section className="text-center py-6">
           <a 
             href="tel:13105893992"
             className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-colors text-lg sm:text-xl text-center"
           >
             Call or text Fred Talisman, MFT now at 1-310-589-3992
           </a>
        </section>

        <SectionDivider />

        {/* Testimonial: Saved after infidelity */}
        <section className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10 hover:border-gold/20 transition-colors">
          <div className="relative">
            <span className="absolute -top-3 -left-3 text-gold/20 text-6xl font-serif">"</span>
            <h3 className="text-3xl font-serif font-bold mb-4 text-gold flex items-center">
              <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
              Saved after infidelity
            </h3>
            <p className="text-lg mb-4 text-white/90 leading-relaxed">
              "By the time I found Fred Talisman, Cindy was ready to break up with me. I was devastated. She is the person I love more than anyone. She is my soul mate. She felt that she could never trust me again and that she could never forgive me. Before I found Fred, I had tried other things and spoke to other people, but not only were their methods ineffective, some actually made things worse with her! I saw couples counseling with Fred as my last resort but she wouldn't do it with me. I worked with Fred on my own while working with his home study course, 'Save Your Relationship.' I'm not geographically close to Fred's office, so I worked with him by phone. To my amazement, working with Fred by phone was more valuable than any help I've gotten in person. Thanks to Fred, she gave me a last chance. Fred gave me hope beyond hope. I was impressed with his depth of understanding and compassion. I saw the first improvements with her almost immediately after the first session I did with Fred. Cindy and I got married almost a year after the crisis that Fred got us through. Using the things that Fred taught me, my wife and I are now stronger than ever as a couple. Our relationship gets better everyday. And that's not all! She is now pregnant going on 20 weeks! I am so incredibly excited about what this little life will become. We are ecstatic. Everything is working really well. It's amazing. I'm very grateful and thankful for all of Fred's incredible help. The skills he taught me have also improved every other relationship in my life, including my friends, relatives, work mates and casual acquaintances. If everyone learned Fred's skills and put them into practice, the world would be a much better place. I really can't thank Fred enough and by the grace of God, I am on a much better track now with my wife. Fred not only showed me how to save my relationship. He also forever changed my life for the better. What I got from Fred is the most valuable help I have ever received."
            </p>
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-gold/50 mr-4"></div>
              <p className="text-lg font-semibold text-gold">-Dennis Hart</p>
            </div>
            {/* CTA Block - Simplified and Updated Phone */}
            <section className="text-center py-6">
               <a 
                 href="tel:13105893992"
                 className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-colors text-lg sm:text-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
               >
                 Call or text Fred Talisman, MFT now at 1-310-589-3992
               </a>
            </section>
          </div>
        </section>

        <SectionDivider />

        {/* Testimonial: Saved us after last counselor... */}
        <section className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10 hover:border-gold/20 transition-colors">
           <div className="relative">
            <span className="absolute -top-3 -left-3 text-gold/20 text-6xl font-serif">"</span>
            {/* Anchor for linking from above fold */}
            <h3 id="nicole-jake" className="text-3xl font-serif font-bold mb-4 text-gold scroll-mt-20 flex items-center"> 
              <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
              Saved us after last counselor told us we shouldn't be together
            </h3>
            <p className="text-lg mb-4 text-white/90 leading-relaxed">
              "My husband and I personify the saying, "Opposites attract," and one Saturday three months ago we'd finally hit the wall; We were in that make it or break it moment. This was especially frustrating because for the ten months prior we'd been seeing a highly recommended psychologist who seemed to make our emotional situation worse. Every session went about the same: we'd air our discontents, yelling would commence, tears would fall, and the psychologist would "arbitrate", but offer no tangible alternative ways of dealing with our conflict and emotions when he wasn't there with us. Then he'd conclude that while we were both, "intelligent, kind, loving people, maybe you're just not cut out to be together." Nothing felt more awful than being told by a professional that our relationship was probably doomed. We knew we loved each other – and I knew there had to be some better way. In desperation on that particular Saturday I googled "how to save my marriage" and that took me to Fred's website. Half an hour later we had him on the phone (on a Saturday, no less!). He asked us both one simple question, "Are you committed to saving your marriage?" Even though we were raw with anger, resentment, and hurt, we each said yes. And then he scheduled us a session for later that day. Ever since that first session Fred has been gently providing us with relationship skills we hadn't been taught before. His approach is non-judgmental, and deliberately – remarkably – simple, and his techniques do work quickly if you are dedicated to following the steps he's laid out for you. He provided us with time-tested ways to stop our fights before they start, and the techniques one needs to function more healthily in their relationship. Best of all he's started to give us a way to better accept each other the way we are – rather than try to change one another. And he does this without psychoanalysis or psychobabble. It is a very refreshing approach to couples counseling; He's not just a relationship saver, he's a relationship builder. Thanks Fred!"
            </p>
             {/* Assuming Nicole & Jake wrote this one based on context */}
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-gold/50 mr-4"></div>
              <p className="text-lg font-semibold text-gold">-Nicole & Jake</p>
            </div>
            {/* CTA Block - Simplified and Updated Phone */}
            <section className="text-center py-6">
               <a 
                 href="tel:13105893992"
                 className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-colors text-lg sm:text-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
               >
                 Call or text Fred Talisman, MFT now at 1-310-589-3992
               </a>
            </section>
          </div>
        </section>

        <SectionDivider />

        {/* Am I your best hope? Section */}
        <section className="space-y-6 bg-navy-light p-8 rounded-lg border border-white/5 shadow-lg">
           <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gold flex items-center">
             <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
             Am I your best hope to help you to save your relationship?
           </h3>
           <div className="text-lg sm:text-xl space-y-4 text-white/90 leading-relaxed">
            <p>
              I imagine it's really hard and maybe a little bit scary for you to decide who to get help from. You may feel that couples counseling is your last hope but you may also know of people who went to a marriage counselor and they felt the marriage counselor did more harm than good or wound up ending their relationship.
            </p>
            <p>
              I'm going to briefly tell you about me and how I work so that you have enough information to determine if I'm the one that's most likely to be able to help you to save your relationship.
            </p>
            <p>
              For over 50 years I've specialized in saving relationships that were on the verge of ending even when only one person still wanted the relationship to work and even when they had no hope that it could be saved and even when their partner wasn't willing to get help with them. I am happy to help you to rescue your relationship.
            </p>
            <p>
              It's my passion to save relationships, to keep families together and to make the relationship work for both people.
            </p>
            <p>
              You probably know of people who went to couples counseling and it wound up ending their relationship.
            </p>
            <p>
              When a relationship is in crisis, it's in a very delicate state. Couples counseling is not neutral. If done correctly it can make the difference between saving your relationship and your relationship ending. If done incorrectly, it can push the relationship over the edge.
            </p>
            <p>All marriage counselors and relationship coaches have their biases.</p>
            <p>
              Some marriage counselors think that if a relationship isn't working, a person should get out. They'll tend to guide an individual or couple in that direction. I think of them as <span className="font-bold text-gold">relationship enders</span>.
            </p>
            <p>
              In my experience, that first session with a couple, especially when a person has already told their partner they want to break up, is a very delicate, critical time.
            </p>
            <p>
              <span className="font-bold text-gold">I'm a family and relationship saver.</span> It's my passion to save relationships, to keep families together and to make the relationship work for both people.
            </p>
          </div>
        </section>
        
        <SectionDivider />
        
        {/* CTA Block - Simplified and Updated Phone */}
        <section className="text-center py-6">
           <a 
             href="tel:13105893992"
             className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-colors text-lg sm:text-xl text-center"
           >
             Call or text Fred Talisman, MFT now at 1-310-589-3992
           </a>
        </section>

        {/* Can your relationship be saved? Section */}
        <section className="space-y-6 bg-navy-light p-8 rounded-lg border border-white/5 shadow-lg">
           <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gold flex items-center">
             <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
             Can your relationship be saved?
           </h3>
           <div className="text-lg sm:text-xl space-y-4 text-white/90 leading-relaxed">
            <p>
              If you're like many people who've contacted me for help, you might be thinking that it's just too late to save your relationship if your partner has threatened to break up.
            </p>
            <p>
              So, can your relationship be saved? In my experience, most relationships end unnecessarily and the breakup could have been prevented with the right kind of help.
            </p>
            <p>
              If your partner isn't willing to get help with you, is your relationship doomed?
            </p>
            <p className="pl-4 border-l-2 border-gold/30 py-2">
              Here's my question for you. How many people in a relationship does it take to save the relationship? Obvious answer, right? It takes two people to save a relationship. Of course. Right?…WRONG! It takes a minimum of <span className="font-bold text-gold">one person</span>, not both, to save a relationship and to keep a family together.
            </p>
            <p>
              With so many of the relationships I've helped, including the ones that were in crisis when I first got involved, I've only worked with one person. They took what I gave them and successfully stopped their breakup and reconciled their relationship.
            </p>
            <p>
              I would have been happy to work with them as a couple. It just wasn't an option because their partner wasn't willing to join us in the process. I'm a realist. I have a mission to help you to save your relationship and to keep your family under one roof. I work with what I have to work with.
            </p>
            <p className="italic text-center text-gold/90 text-xl py-2">
              "In my 50+ years of saving relationships, I have helped to save lots of relationships where only one person got my direct help."
            </p>
            <p>
              If you like what you're reading then give me a call on my cell, schedule a free consultation, or email me at <a href="mailto:fred@fredtalisman.com" className="text-gold hover:text-gold-light transition-colors">fred@fredtalisman.com</a>, or text me.
            </p>
            {/* Updated Phone Number */}
             <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:justify-center pt-4">
               <a 
                 href="tel:13105893992" 
                 className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-8 rounded-full transition-colors text-lg sm:text-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
               >
                Call or text me: 1-310-589-3992
               </a>
               <Link
                href="/calendlybooking"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-8 rounded-full transition-colors text-lg sm:text-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
               >
                 Schedule a free consultation
               </Link>
            </div>
            <p>
              Please keep in mind that I can communicate with you a lot more effectively by phone or texting than I can by email. Also, I check my phone at every break. I check my email a lot less often.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* CTA Block - Simplified and Updated Phone */}
        <section className="text-center py-6">
           <a 
             href="tel:13105893992"
             className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-colors text-lg sm:text-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
           >
             Call or text Fred Talisman, MFT now at 1-310-589-3992
           </a>
        </section>

        {/* What should you do next? Section */}
        <section className="space-y-6 bg-navy-light p-8 rounded-lg border border-white/5 shadow-lg">
           <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gold flex items-center">
             <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
             What should you do next?
           </h3>
           <div className="text-lg sm:text-xl space-y-4 text-white/90 leading-relaxed">
            <p className="bg-navy-dark/30 p-4 rounded-lg">
              Here's my first piece of advice to you. If from what you just read you think I might be your best or last hope, call me right now to take the first step. It doesn't matter what time it is. When I stop working for the day I turn my phone off so you're not going to wake up myself or my wife. If you call during my waking hours and I'm doing a session, it goes right to voice mail so you're not going to disturb me. DO leave a message.
            </p>
            <p className="pl-4 border-l-2 border-gold/30 py-2">
              I will call you back at my first break. I understand and respect the fact that you're urgently trying to save your relationship and to keep your family together and that you need to make contact with me as soon as possible.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* CTA Block - Simplified and Updated Phone */}
        <section className="text-center py-6">
           <a 
             href="tel:13105893992"
             className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-colors text-lg sm:text-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
           >
             Call or text Fred Talisman, MFT now at 1-310-589-3992
           </a>
        </section>

        {/* When is it too late? Section */}
        <section className="space-y-6 bg-navy-light p-8 rounded-lg border border-white/5 shadow-lg">
           <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gold flex items-center">
             <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
             When is it too late for a relationship to be saved and when is a relationship definitely over?
           </h3>
           <div className="text-lg sm:text-xl space-y-4 text-white/90 leading-relaxed">
            <p className="bg-navy-dark/30 p-4 rounded-lg border-l-2 border-gold/30">
              In my experience, the one timing when a relationship is definitely over is when the person that wanted to save the relationship gives up. Because, then there is no advocate in the relationship to rescue it. So, whether your partner is willing to get help with you or whether you are the only one in the relationship who is trying to save it, call me. I will give you my professional opinion if I think I can help you to save it.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* Issues List Section */}
         <section className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gold flex items-center">
              <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
              Which of the following describes your situation?
            </h3>
           <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              I help to address and resolve the following issues. Which of the following describes you, your partner, or your situation:
           </p>
           <div className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10">
             <div className="flex flex-wrap gap-3 justify-center">
               {[
                 "Infidelity", "Broken Trust", "Love But Not In Love", "Partner Wants To Break Up",
                 "Partner Wants Separation", "Feeling Broken", "Partner In Love With Someone Else",
                 "Bickering/Fighting/Verbal Abuse", "Broken Hearted", 
                 "Feel Like You're Walking On Eggshells With Your Partner", "Anger Management", 
                 "Lack Of Communication", "Don't Feel Heard or Understood", 
                 "Partner Acts Like You're Never Good Enough", 
                 "Partner Doesn't Understand or Have Compassion for the Demands on You and the Pressure That You're Under",
                 "Feel Judged and Criticized", "Partner Gaslights", "Partner is a Narcissist", 
                 "Already Separated", "Lack of Respect, Kindness, Appreciation and/or Emotional Support", 
                 "Lying", "Don't Keep Agreements", "Hard To Get Over The Past", "Don't Get Genuine Apologies",
                 "Issues Don't Get Addressed or Resolved", "Needs Not Being Met", 
                 "Tries to Turn Family and Friends Against You", "Staying Just For The Kids", 
                 "Disagree About Parenting", "Feel Hopeless, Powerless and/or Despondent", 
                 "Feel Disappointed In Yourself and/or In Your Partner", "Feel Like You're Letting Your Kids Down",
                 "Treated Poorly In Front of Kids, Family and/or Friends", 
                 "Partner Doesn't Know or See Your Specialness", "Feel Taken Advantage Of", 
                 "Dread Coming Home or Being Home When Your Partner is Present", "Have Little In Common",
                 "Blended Family/Step Children", "Ex Spouse or In Law Problems", "Pornography", "Jealousy",
                 "Lack Of Attraction", "Midlife Crisis", "Lack of Affection and Intimacy", 
                 "Infrequent Or No Sex", "Loss Of Personal Freedom", "Too Controlling/Possessive", 
                 "Can't Leave Work At Work", "Long Distance Relationship", "Grieving For Loss Of Loved One", 
                 "Alcohol/Substance Abuse", "ADHD", "Depression/Anxiety/Stress", "Adults Abused As Children"
               ].map((issue, index) => (
                 <span 
                   key={index}
                   className="bg-gold hover:bg-gold-light text-navy px-4 py-2 rounded-full text-sm md:text-base font-semibold cursor-default shadow-sm transition-colors" 
                 >
                   {issue}
                 </span>
               ))}
             </div>
           </div>
         </section>

         <SectionDivider />
         
         {/* CTA Block - Simplified and Updated Phone */}
        <section className="text-center py-6">
            <a 
              href="tel:13105893992"
              className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-colors text-lg sm:text-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Call or text Fred Talisman, MFT now at 1-310-589-3992
            </a>
        </section>

      </main>
    </div>
  );
}
