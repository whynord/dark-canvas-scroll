export type Accent = "default" | "acid" | "magenta" | "cyan" | "flame";

export type Post = {
  slug: string;
  title: string;
  date: string; // e.g. "2026 · 07"
  tag: string;
  accent: Accent;
  excerpt: string;
  body: string; // lightweight markdown
};

export const posts: Post[] = [
  {
    slug: "made-not-generated",
    title: "Made, Not Generated",
    date: "2026 · 07",
    tag: "Manifesto",
    accent: "acid",
    excerpt: "The difference between volume and voice — and why refinement still beats the slurry.",
    body: `When anyone can generate anything, taste is the only moat.

After 25 years inside other people's brands — building the signal for someone else — I'm finally building my own. And the first thing I'll tell you, having watched this shift from the inside: the ground moved, and most brands haven't noticed yet.

Here's the claim. For two decades, design was scarce because making was scarce. You needed a studio, a printer, a crew. That scarcity is gone. A machine will generate any image, any layout, any logo in seconds, on a laptop, for the price of a prompt. So the scarce thing is no longer production. It's judgment — what to keep, what to cut, what to stand for. Taste.

You've felt this even if you haven't named it. Scroll any feed and everything starts to look the same: the same gradients, the same faces, the same smooth, weightless glow. That's not a coincidence. It's what happens when the same tools, trained on the same data, make the same average-looking thing. The industry even has names for it now — **AI slop**, **the sea of sameness**. This paper isn't another trend list. It's three moves for operating when the cost of making hit zero and the value of taste went through the roof.

## The 3 moves

- **The Hand Is the Signal** — visible craft becomes a trust mark.
- **Taste Is the Moat** — curation beats generation; 'human-made' becomes a premium category.
- **Root, Don't Blanket** — local knowledge can't be prompted, and it wins markets.

## Move 1 — The Hand Is the Signal

Ask yourself: the last time you saw an image and your first thought was 'is this AI?' — what did that thought do to how much you trusted it?

For two decades, 'polish' was the goal. Smooth gradients, flawless renders, the uncanny clean of the digital. In 2027, polish reads as suspicion.

The reason isn't aesthetic — it's evidentiary. You've learned to read an image for how it was made, and you've quietly decided that the method is part of the message. Getty Images' VisualGPS research puts a number on what you already feel: 74% of consumers accept that an AI-generated image can look as realistic as a photograph — but 78% say that because of its origin, it still cannot be considered 'real.'

> Sit with that gap. Looking real and being real are no longer the same judgment. And the difference between them is provenance.

So what happens to the visible human hand — grain, imperfection, a seam you can see? It flips. From a flaw to a signal. It says: a person was here. In a feed where everything synthetic looks identical, the hand is what makes something recognizable as intentional. When everything is frictionless, friction is proof.

What's the business case? This isn't preciousness; it's risk management. Reporting on the rise of the 'anti-AI aesthetic' found that audiences now treat every stage of creation as a potential touchpoint — and they judge brands that lean hard on generated content as showing a lack of effort, not efficiency. You're a well-resourced brand. You're expected to invest in human-led creative. Skip that step and it doesn't read as innovation. It reads as laziness. The real cost of 'looking AI' isn't embarrassment. It's a trust discount you can't see on the spreadsheet.

Le Creuset. When they launched a surrealist campaign for a new nautical color — their iconic cookware, boat-sized, bobbing beside yachts — they moved fast to credit the human artists behind the work. Before the 'is this AI?' suspicion could even land. The craft wasn't the footnote. It was the defense.

OpenAI — yes, OpenAI. In 2025 they shot a campaign on 35mm film. Handmade, nostalgic, deliberately imperfect — deployed ironically by the company building the generators, to reflect 'our deeply personal relationship with technology.' Even the people making the machines understand that human craft is what lends a thing weight.

Aerie, with Pamela Anderson (March 2026). They banned AI-generated bodies and people outright. Anderson delivers the line: 'You can't prompt this.' The constraint is the campaign. What you see is real, and the brand made that the entire message.

And closer to home — UNESCO × SACIT × ICONCRAFT in Thailand. Seven Thai design houses reworked traditional local textiles into 14 one-of-a-kind ensembles. A collaboration that treats craft lineage as the asset, not the decoration. It sits at the softer end of the evidence — a cultural initiative, not a brand's published ROI — but it points the same direction: in this region, 'made by hand, rooted in place' is becoming a value proposition brands are willing to build around.

The move for you: stop hiding the making. Credit the craft. If it was made by humans, say so — loudly, where the audience can see it. In 2027, the hand isn't a detail. It's the proof.

## Move 2 — Taste Is the Moat

Here's a question that should keep a few brand managers up at night: if your competitor can generate the exact same assets you can, in the same afternoon, for the same price — what, exactly, is your advantage?

Generative AI doesn't differentiate. It averages. It pulls from the same training data as everyone else and spits out the most probable thing. A 2026 SSRN study put it plainly: AI-generated brands 'mimic authenticity without the underlying context' — they imitate heritage, warmth, founder language, origin cues, but the imitation is hollow because it has no real context to draw from. You can prompt 'heritage.' You can't prompt having one.

So the scarce skill flips again. When production is free, curation is what's valuable. Anyone can generate. Few can choose. The ability to look at a hundred options and know which one is right — that's taste. And taste, it turns out, is a moat.

Why a moat? Because it isn't a thing you buy. It's a thing you are — built over years of seeing, rejecting, and refining. A competitor can copy your logo in an hour. They can't copy the judgment that produced it. When everything is generatable, the brands that win are the ones that look like they were made by someone with a point of view. 'Human-made' stops being a label and becomes a premium category in its own right.

NIGO's Human Made. The name isn't a coincidence — it's the thesis. The brand generated ¥14.27 billion (about $89 million) in fiscal 2026 revenue, up 26.8% year on year, on the back of a $460 million Tokyo IPO. People pay luxury prices for visibly handcrafted goods because the 'human-made' signal is the product. The scarcity isn't the fabric. It's the intention.

Patrón × Guillermo del Toro — 'The Perfect Pour.' Tapping an Oscar-winning director isn't unusual for a major brand. Doing it to equate craftsmanship with quality — blending the director's signature with the brand's — is the point. Patrón isn't selling tequila's ingredients. It's selling the care. The campaign makes craft visible as a proxy for quality, and asks you to trust the product because a human obsessed over it.

Grab vs Uber in Southeast Asia. Step back from consumer goods and look at the infrastructure layer. When Grab competed with Uber across SEA, its hyperlocal instinct — localised app versions, regional market focus, an understanding of how the region actually moves — helped it raise nearly $4 billion against Uber's $700 million regional spend. Uber had the better-known global template. Grab had the taste to root itself in each market. Template lost to judgment. Sound familiar?

The move for you: the question isn't 'how fast can we generate?' It's 'who decides what's good?' If your competitive advantage is now a human with taste, you'd better be investing in that human — and in the culture that sharpens them. Tools are cheap. Judgment isn't.

## Move 3 — Root, Don't Blanket

Quick test. Name a brand that won a new country by shipping the same global campaign everywhere, unchanged. Hard, isn't it? Now name one that won by becoming specifically of that place. Easier.

This is the move most exposed by the AI era, and the one most brands will get wrong. When generation is free and frictionless, the lazy default is the blanket — one templated identity, one global rollout, generated once and deployed everywhere. It's efficient. It's also invisible. A brand that looks like every other brand, in every market, is a brand you'll scroll past without remembering you saw it.

The antidote is rooting. Specificity. Local knowledge — the kind that comes from living somewhere, not prompting about it. You can generate a 'Thai-inspired' visual in seconds. You cannot generate the contextual taste to know why a Tom Yum Goong Pizza works and a 'Thai-flavored' something else falls flat. Local knowledge can't be prompted. That's exactly why it wins.

The Pizza Company vs Pizza Hut — Thailand's quiet case study. This one predates generative AI, and I'm not going to pretend it doesn't. But that's precisely why it matters: it proves the dynamic was real long before the machines arrived, and the machines just make the gap unmissable.

Here's what happened. Minor International ran Thailand's Pizza Hut franchise from 1980. In 1999, Yum!/Tricon — Pizza Hut's parent — declined to renew the franchise and went direct. Minor didn't fold. In March 2001 it rebranded nearly 100 Pizza Hut stores into The Pizza Company in under 45 days, and beat its former partner on home soil. It now holds close to 60% of Thailand's pizza market, runs 597 outlets across nine countries (as of end-2024), and is targeting 4,500 outlets by 2029.

How? Not by out-spending. By rooting. The Pizza Company did what a global template never would: it built a menu around Thai taste — the Tom Yum Goong Pizza, spicy seafood, localized pastas — backed by a 20-minute delivery guarantee and the '1112' hotline that became a cultural fixture. Pizza Hut, running the standardized global playbook, lost the country. A local operator with contextual taste beat a global giant with a global template.

And it's not a museum piece. In 2026, VML Thailand turned the brand's sauce packets into a 'Clutter → Free Pizza' campaign — proof the local instinct is still alive two decades on. The structural lesson hasn't aged: when you can generate anything, the thing you can't generate — knowing a place from the inside — is the thing that wins it.

Zalo in Vietnam. Same pattern at the platform layer. A local messenger with deep cultural understanding outperforms foreign entrants that apply a generic Southeast Asian strategy. The global template is efficient. The local root is undefeated.

The move for you: if you're expanding, don't generate-and-deploy. Root. Hire the local taste. Let the market change the work. The brands that treat 'local adaptation' as a checkbox will be the ones a machine could have made — and a machine will, for someone cheaper.

## What this means for you

Three moves. One through-line: when making became free, meaning became scarce. The hand is the signal. Taste is the moat. Root, don't blanket. None of these are things you can prompt. All of them are things you can be.

If you're building a brand in 2027, here's the uncomfortable part: the tools won't save you. Everyone has the tools. The advantage is the judgment, the craft, and the specific cultural root that a machine can imitate but never own. You can generate a thousand logos tonight. You can't generate having stood for something for twenty-five years.

That's the opening I'm building from. After 25 years inside other people's brands, the lesson is simple: in a world of infinite generation, the only thing worth generating is signal — and signal has always been made by hand.

Four things to take into the room:

1. **Credit the craft.** If humans made it, say so where the audience can see it. The hand is proof, not a detail.
2. **Invest in taste, not just tools.** The scarce skill is choosing, not producing. Pay for judgment.
3. **Root before you roll out.** Local knowledge beats a global template every time. Hire the taste.
4. **Treat provenance as brand equity.** How it was made is now part of what you're selling.

Made, not generated.`,
  },
  {
    slug: "design-for-2026",
    title: "Design for 2026",
    date: "2026 · 02",
    tag: "Craft",
    accent: "default",
    excerpt:
      "When sustainability stopped being a department design consults and became a literacy designers hold themselves.",
    body: `# Design for 2026: When Sustainability Became a Design Skill, Not a Design Value

For most of the last decade, ESG sat next to design rather than inside it. A sustainability team wrote the report; a design team made the interface; a marketing team wrote the campaign about how much the company cared. The 2026 case studies emerging from Samsung, Dell, Apple, Walmart, Ford, Patagonia, and a handful of others suggest that arrangement is dissolving. ESG is no longer a department that design consults. It's becoming a set of literacies — traceability, circularity, inclusive systems thinking, carbon-aware interface choices — that designers are expected to hold themselves, the same way they're expected to hold typography or color theory.

The clearest way to see this shift is through a framework quietly mentioned at the end of most trend reports on the subject: the **Graphic Design–Innovation–Circularity (GIC) Model**. Rather than treating sustainable design as one trend among many, GIC proposes that visual communication, product innovation, and circularity are three legs of the same practice. Used as a lens, it reorganizes what would otherwise be a list of unrelated case studies into something closer to a discipline.

## The Backend and the Frontend of ESG Design

Before applying GIC, it's worth naming a split that runs underneath nearly every case study in this space: sustainable design is now doing two distinct jobs, and confusing them is where most greenwashing accusations come from.

**The backend** is infrastructural and mostly invisible to the end user. Walmart's blockchain-based produce traceability system, which cut contamination-tracing time from days to seconds, is backend work. So is Ford and BMW's use of blockchain to verify that cobalt in their batteries isn't sourced from conflict zones. Nobody sees this design work directly; they benefit from it structurally.

**The frontend** is narrative and visible. Patagonia's "Don't Buy This Jacket" campaign and its accompanying repair guides are frontend work — they're designed to be seen, read, and acted on by a consumer.

The companies that hold up best under scrutiny are the ones doing both. Patagonia's repair guides aren't just a clever campaign; they're backed by an actual circular-economy commitment to product longevity. That pairing is what separates brand activism from a marketing claim. A useful diagnostic for anyone writing about this space — or evaluating a company's claims — is simply to ask: is there frontend narrative without backend infrastructure? If so, that's the greenwashing pattern to watch for.

## Applying the GIC Model to the 2026 Case Studies

### Graphic Design: Making the Invisible Visible

The "graphic design" leg of GIC isn't about aesthetics for their own sake — it's about using design to surface information that would otherwise stay buried in a supply chain or a sustainability report.

Ericsson's "Connected Recycling" platform and Philips' hospital carbon-footprint service are both, at their core, information design problems: how do you take dense, cross-departmental data and turn it into something a facilities manager or hospital administrator can act on? The design challenge isn't the plumbing (the SaaS backend); it's the interface that makes the invisible cost of waste or carbon suddenly visible and actionable.

The more contested example here is dark-mode-as-sustainability-signal — a Singapore-based cybersecurity consultancy that redesigned its site with a dark-mode-primary theme, citing the 40–60% energy reduction dark mode offers on OLED screens. This is real physics, but it's device-level physics, not really a claim the website's design can take credit for in any auditable way. It's worth including in a 2026 trend piece, but as a cautionary example rather than a triumphant one: it shows how easily a real sustainability mechanism can be borrowed to dress up a design choice as more consequential than it is. As ESG claims come under more regulatory and public scrutiny, this is exactly the kind of soft claim that won't hold up.

### Innovation: Redesigning the Object, Not Just the Ad

This is where the most technically serious work is happening, and where "innovation" stops being a buzzword and starts meaning specific material and process choices.

Dell's Concept Luna Evolution is a good example: the innovation isn't a new material or a clever marketing hook, it's a manufacturing process redesigned around robotic disassembly, so that repair and material recovery are built into the product's DNA rather than bolted on at end-of-life. Apple's Apple Watch Series 9 carbon-neutral milestone works similarly — the actual innovation is in materials sourcing and low-carbon shipping logistics, in service of a 2030 carbon-neutral target across the whole product line.

Samsung's Project INKlusion belongs here too, even though it's framed as inclusive design rather than environmental design — because the underlying move is the same. Samsung didn't bolt accessibility onto finished products; it built an Inclusive Design Strategy in collaboration with over 500 internal Employee Resource Group members, treating DEI as what the source material calls a "catalyst for innovation" rather than a constraint applied after the fact. That's the innovation pattern across this whole leg of GIC: ESG considerations move upstream, into the process that generates the product, instead of downstream, into the messaging about the product.

### Circularity: The Business Case for Not Selling More

The hardest sell in this entire space is circularity, because it asks designers to become "Strategic Consultants" rather than "Service Providers" — to argue, credibly, for longevity and repair over the immediate low-cost production that most business models still reward.

Patagonia's repair guides are the clearest example of circularity as a designed output, not an afterthought — user-friendly documentation that treats keeping a product in use longer as a genuine design deliverable. Digital Product Passports, which document a product's entire lifecycle in machine-readable form, extend this into Industry 4.0 territory: circularity as something literally built into a product's metadata, not just its marketing.

## The Tension the Roadmap Doesn't Quite Resolve

There's a real friction between two things the 2026 forecasts ask designers to be good at simultaneously: hyper-local cultural fluency ("Glocalization") and AI-driven design at scale. AI is very good at applying one pattern across many contexts efficiently. Genuine local nuance — the kind that avoids what gets called "woke-washing," where a brand's diversity messaging feels performative rather than substantive — resists exactly that kind of scaling. You can't fully automate cultural specificity.

The practical resolution, based on where the case studies point, isn't AI or localization — it's AI as a first-pass tool that surfaces options, with human judgment (what the roadmap calls "Advantage Awareness," or intersectional literacy) making the final call on what's actually appropriate for a specific community. Participative co-design — bringing users directly into the process rather than designing at them — is the mechanism that keeps this human judgment grounded in something other than a designer's own assumptions. This is arguably the clearest real-world instance of "Human-Machine Teamplay": not AI and humans doing the same task faster together, but AI handling scale while humans handle the judgment calls that scale can't make.

## A Practical Roadmap: What This Means for Reskilling

If ESG and AI fluency are converging into a single design competency, the reskilling agenda looks less like a list of unrelated workshops and more like a coherent curriculum:

1. **Sensory and emotional fluency.** As digital fatigue pushes audiences toward tactile, multi-sensory content, prompt engineering needs to move past physical description into texture, sound, and movement — the vocabulary of ASMR and immersive environments, not just "describe a chair."
2. **Cultural and intersectional literacy.** Understanding how privilege and discrimination overlap isn't a soft skill anymore; it's what keeps hyper-local, AI-assisted marketing from misfiring in front of the exact communities it's trying to reach.
3. **Green UX as default practice.** SVG over PNG, dark mode used honestly rather than as a sustainability costume, system fonts over custom font loads — carbon-aware design decisions are moving from "nice to have" to expected practice, alongside genuine circular-economy literacy: knowing how to make the business case for repair and longevity, not just the design case.
4. **AI governance as a design responsibility, not just a legal one.** Regular bias audits using toolkits like IBM's AI Fairness, paired with what's being called "Digital Emancipation" — understanding how AI systems actually work well enough to keep human oversight meaningful rather than symbolic.

## The Bottom Line

The throughline across Samsung, Dell, Apple, Walmart, Ford, BMW, Patagonia, Ericsson, and Philips isn't that sustainability is now fashionable in design circles — it's that ESG has stopped being a constraint that design works around and started being infrastructure that design is built on top of. The companies that get this right tend to be doing backend and frontend work together: real traceability behind real narratives, real process redesign behind real carbon claims. The ones that get it wrong tend to have one without the other — a dark-mode website standing in for a genuine sustainability strategy, a diversity campaign with no design process to back it up.

For designers, that means the reskilling agenda isn't really about adding "sustainability" as a new specialty alongside typography or UX. It's closer to a redefinition of what design competency means in 2026: the ability to hold ethical judgment, cultural nuance, and material consequence with the same fluency that's traditionally been reserved for visual craft — while treating AI as the tool that handles scale, not the tool that replaces the judgment.

---

Working notes: sources include Samsung's Project INKlusion documentation, Dell's Concept Luna materials, Apple's Environmental Progress Report on the Apple Watch Series 9, Walmart's blockchain traceability case studies, Patagonia's Worn Wear program materials, and industry trend analysis (including Adobe's creative trends reporting) on AI and design workforce shifts.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
