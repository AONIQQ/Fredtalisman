import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen">
      <header className="py-12 md:py-20 border-b border-gold/30 bg-navy-light">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 animate-fade-in">
            About FRED TALISMAN
          </h1>
          <p className="text-xl text-center animate-fade-in delay-100">
            Successfully Saving Relationships for Over 50 Years
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3 animate-slide-in">
              <Image
                src="/Fred1.jpg"
                width={300}
                height={300}
                alt="Fred Talisman"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-6 animate-slide-in">
              <p className="text-lg">
                Fred Talisman, MFT, is a Licensed Marriage and Family Therapist with over 50 years of experience. He
                specializes in saving relationships that are on the verge of ending, even when only one person still
                wants the relationship to work and even when they had no hope that it can be saved and even when only one person is willing to receive Fred&apos;s help.
              </p>

              <p className="text-lg">
                Fred's passion is to save relationships, to keep families together, and to make relationships work for both
                people. He is pro-marriage, pro-relationship, and pro-family.
              </p>

              <p className="text-lg">
                With his extensive experience, Fred has developed unique strategies and approaches to help couples
                overcome challenges such as infidelity, broken trust, communication issues, and more. He knows that
                with the right guidance and tools, most relationships can be saved and improved.
              </p>

            </div>
          </div>

          <div className="space-y-8 animate-slide-in mt-12">
            <p className="text-lg">
              He provides these services in person, via Zoom, FaceTime, or phone, making it convenient for clients to
              receive help regardless of their location or schedule.
            </p>

            <p className="text-lg">
              Fred's approach is unique in that he knows it only takes one person to start the process of saving a
              relationship. He has successfully helped many individuals turn their relationships around, even when their
              partner was unwilling to get Fred&apos;s help.
            </p>

            <p className="text-lg">
              With his warm, compassionate, and direct style, Fred creates a safe and supportive environment for his
              clients to explore their challenges and work towards their goals. He is committed to helping each client
              find the path to a happier, healthier relationship.
            </p>

            <div className="bg-gold text-navy p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold mb-4">Contact Fred</h2>
              <p className="text-lg mb-4">
                If you're ready to take the best step towards saving your relationship, don't hesitate to reach out to
                Fred. He offers free phone consultations to discuss your situation and how he can help.
              </p>
              <p className="text-lg mb-6">Contact him today for that no cost discovery call:</p>
              <div className="space-y-4">
                <Link 
                  href="tel:+13104293658" 
                  className="inline-block bg-navy hover:bg-navy-light text-gold font-bold py-4 px-8 rounded-full transition-colors text-xl text-center w-full border border-gold/30 underline hover:no-underline"
                >
                  Call or text Fred at +1 310 429 3658
                </Link>
                <Link 
                  href="/calendlybooking" 
                  className="inline-block bg-navy hover:bg-navy-light text-gold font-bold py-4 px-8 rounded-full transition-colors text-xl text-center w-full border border-gold/30"
                >
                  Book your no cost discovery call with Fred
                </Link>
              </div>
            </div>
          </div>
          <section className="mt-12 space-y-12">
            {/* First Section */}
            <h2 className="text-3xl font-serif font-bold mb-8 text-gold text-center">
              IF YOU'RE LOOKING FOR HELP BECAUSE YOUR PARTNER WANTS TO BREAK UP WITH YOU OR YOU'RE THE ONE CONSIDERING A BREAKUP HERE'S WHY FRED TALISMAN MFT IS YOUR BEST HOPE TO SHOW YOU HOW TO SAVE YOUR RELATIONSHIP & HOW TO MAKE IT WORK FOR BOTH OF YOU
            </h2>
            
            <div className="bg-navy-light p-8 rounded-lg shadow-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-gold">
                    "FRED'S ONE OF THE TOP MARRIAGE COUNSELORS IN THE COUNTRY"
                  </h3>
                  <p className="text-lg mb-4">
                    "Fred Talisman is one of the top marriage counselors in the country and is on a mission to save relationships, keep families together and to show you how to make your relationship fully work for both of you. If your relationship has gotten off track or you just know there can be more, Fred can show you how to turn it all around and take things to the next level."
                  </p>
                  <p className="text-lg font-semibold text-gold">
                    Kelli Calabrese, Personal Trainer of the Year, America's Fitness, Nutrition and Lifestyle Expert
                  </p>
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="bg-navy-light p-8 rounded-lg shadow-lg">
              <blockquote className="text-2xl font-serif font-bold mb-6 text-gold">
                "Fred Talisman MFT has been helping people for over 50 years to save their relationship that seemed unsavable. So no matter whatever it is you're going through right now he's seen it before and I know he knows how he can help you. It's never too late."
              </blockquote>
              
              <div className="space-y-6 text-lg">
                <p>
                  "Did your partner tell you that they want to breakup? Or are you considering breaking up? Stop scrolling for a moment. You landed here for a reason. First, I want to say I'm sorry to hear that you're going through this. Fred TalismanMFT has been helping people for over 50 years to save their relationship that seemed unsavable. So no matter what you're going through right now he's seen it before and I know he knows how he can help you. It's never too late."
                </p>
                <p>
                  "You know that therapist you go to see or you should see but refuse to because you say(swear)(think) 'therapy isn't for me?' Have you ever wondered who your therapist calls when they need help. It's Fred. He's your therapist's therapist. For over 50 years he's been helping therapists, doctors, lawyers, CEOs of major companies, Oscar & Grammy Award Winners, a Pulitzer Prize winner, business owners, plumbers, and teachers to save their relationship. It doesn't matter what stage of life you're in or who you're with, if you're serious about saving your relationship and I mean really serious then call Fred to get his help. I believe he was put on this earth to save and improve relationships and to keep families together."
                </p>
                <p>
                  "If you want to save your relationship. Call or text Fred. He'll tell you what you can do right now to start turning things around."
                </p>
                <p className="font-semibold text-gold">
                  Duane Harden author of "5 Easy Steps to Financial Freedom: Do What You Love & Get Rich Doing It"
                </p>
              </div>

              <div className="bg-gold/10 p-6 rounded-lg mt-8">
                <h4 className="text-xl font-serif font-bold mb-4 text-gold">No cost discovery chat with Fred</h4>
                <p className="text-lg mb-6">
                  To see if Fred is the best fit for you, call or text Fred now at{" "}
                  <Link href="tel:+13104293658" className="text-gold underline">
                    +1 310 429 3658
                  </Link>
                  {" "}or{" "}
                  <Link href="/calendlybooking" className="text-gold underline">
                    schedule a free consultation
                  </Link>
                  {" "}with him.
                </p>
                <Link 
                  href="/success-stories" 
                  className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-4 px-8 rounded-full transition-colors text-xl text-center"
                >
                  Click here to check out Fred's success stories →
                </Link>
              </div>
            </div>

            {/* Third Section */}
            <div className="bg-navy-light p-8 rounded-lg shadow-lg">
              <blockquote className="text-2xl font-serif font-bold mb-6 text-gold">
                "Fred knows from hard experience that by the time most couples go to a marriage counselor one or both may be ready to end the relationship and the window of opportunity to save that relationship is now, or never. When it comes to saving a relationship he's a bulldog. If there is a way to do it, he won't let go until he finds it."
              </blockquote>
              
              <p className="text-lg mb-6">
                "Fred Talisman, a licensed marriage counselor for over forty eight years, saves and revives a dying relationship. How does he do it? Well he's not the stereotypical marriage counselor who sits back and says "uh huh" and watches couples get more and more polarized as they further talk themselves out of their relationship by giving their laundry list of built up hurts and resentments. If a couple is drowning, he's the lifeguard and he jumps in and does whatever it takes to save them, to buy them a second chance, a turning point. I think he's a brilliant strategist. He uses his strategies to turn around years of pain. He uses them to defuse years of tension. He uses them to get the couple reconnected to the love and magic that brought them together in the first place. He demonstrates to them a path, a hope, a vision of the possibility of actually thriving together. To me, Fred is The Relationship Wizard. His ability to save dying relationships are his brilliance and magic. He forged it out of the heartbreak he witnessed countless times in his early years as a traditionally trained marriage counselor, experiencing over and over how that training was grossly inadequate in assisting him to save couples in crisis. He's a practical man. He knows from hard experience that by the time most couples go to a marriage counselor one or both may be ready to end the relationship and the window of opportunity to save that relationship is now, or never. When it comes to saving a relationship he's a bulldog. If there is a way to do it, he won't let go until he finds it. I think his strategies are a gift to couples."
              </p>
              <p className="text-lg font-semibold text-gold">
                Joel Roberts, Former Prime Time Host, KABC Radio
              </p>
            </div>

            {/* Fourth Section */}
            <div className="bg-navy-light p-8 rounded-lg shadow-lg">
              <blockquote className="text-2xl font-serif font-bold mb-6 text-gold">
                "For over 50 years, Fred has helped over 10,000 clients to rescue and save their relationship."
              </blockquote>
              
              <p className="text-lg mb-4">
                "I believe that Fred Talisman is one of the best relationship counselors in the world. For over 50 years, Fred has helped over 10,000 clients to rescue and save their relationship. If your relationship is in crisis, he's your best hope to save it."
              </p>
              <p className="text-lg font-semibold text-gold">
                Peter Wallerstein former director of Marine Animal Rescue who over 30 years rescued over 6,500 sea animals
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

