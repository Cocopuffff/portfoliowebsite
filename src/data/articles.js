import React from "react";

function article_1() {
	return {
		date: "11 Feb 2025",
		title: "Product Strategy for Bank Payments and Collections",
		description:
			"For The Role: Product Manager (Payments and Collections) at Bank of China Limited Singapore Branch's",
		keywords: [
			"Payments",
			"Collections",
			"Bank of China",
			"Bank",
			"BOC",
			"Product Strategy",
			"Product Manager",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: stretch;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				
				.paragraph {
					margin-bottom: 12px;
				}
				
				.subheader {
				font-weight: 700;	
				margin-bottom: 12px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">This report outlines a comprehensive product strategy for Product Manager (Payments and Collections) at Bank of China Limited Singapore Branch that aims to modernise Bank of China’s (BOC) Singapore payment and collection offerings in a competitive and rapidly evolving market, with a focus on leveraging on and strengthening cross border payment solutions between Singapore and China.</div>
					<div className="subheader">VISION AND MISSION</div>
					<div className="paragraph">The vision is to become the preferred partner for corporate clients for payments and collections with a focus on cross border payments between Singapore and China by leveraging on BOC’s strengths. The mission aligns with BOC company mission to “Bridge China and the World for the Common Good” by delivering seamless and cost effective payment and collection solutions to simplify cash management and reconciliation for clients.</div>
					<div className="subheader">COMPETITIVE LANDSCAPE ANALYSIS</div>
					<div className="paragraph">Using Porter’s Five Forces as a lens to analyse the competitive landscape, I have determined that BOC operates in a highly competitive industry that is rapidly evolving and BOC needs to stay at the forefront of innovation to continue to be relevant and competitive in this industry. A SWOT analysis of BOC shows that BOC has a strong brand and competitive offerings in Renminbi (RMB) focused products, it also faces significant opportunities and threats from the shifting economic and technological landscape that it operates in.</div>
					<div className="subheader">STRATEGIC OBJECTIVES</div>
					<div className="paragraph">The strategic objective focuses on two themes of change: digital transformation to increase operational efficiency and enhancing customer experience by leveraging cross-border strengths. Top ranked initiatives includes：</div>
					<ol>
						<li>Create a public API platform with clear documentation for ERP integration</li>
						<li>Develop a low cost, instant cross border payment solution</li>
						<li>Enhance cross border B2B payment speed & cost transparency</li>
						<li>Expand digital onboarding and self-service for corporate clients</li>
					</ol>
					<div className="subheader">STRATEGIC APPROACH TO THE ROLE</div>
					<div className="paragraph">I propose a phased approach:</div>
					<div className="paragraph">Short-Term (First 90 Days): Engage key stakeholders, refine the product portfolio, and initiate customer development to validate hypotheses.</div>
					<div className="paragraph">Mid-Term (3–6 Months): Launch Minimum Viable Products (MVPs) for critical API and dashboard features, and begin piloting low‑cost, instant cross‑border payment solutions.</div>
					<div className="paragraph">Long-Term (1 Year and Beyond): Expand API capabilities with advanced features like multi‑currency support and automated reconciliation, and fully integrate digital onboarding across the corporate segment.</div>
					<div className="subheader">KEY METRICS</div>
					<div className="paragraph">Success will be measured by adoption rates, task success (transaction completion time and error rates), user engagement, retention, and overall customer satisfaction. </div>
				</div>
			</React.Fragment>
		),
		link: '/product_strategy_payments_collections.pdf'
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];

export default myArticles;
