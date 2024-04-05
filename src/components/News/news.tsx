import React from 'react';
import {
	ArticelNumber,
	ArticelTitle,
	Article,
	ArticleContent,
	ArticleImage,
	ArticleText,
	NewsContainer,
} from './news.styles';

const News = () => {
	return (
		<NewsContainer>
			<Article>
				<ArticleImage
					src={require('../../assets/images/image-retro-pcs.jpg')}
				/>
				<ArticleContent>
					<ArticelNumber>01</ArticelNumber>
					<ArticelTitle>Reviving Retro PCs</ArticelTitle>
					<ArticleText>
						What happens when old PCs are given modern upgrades?
					</ArticleText>
				</ArticleContent>
			</Article>

			<Article>
				<ArticleImage
					src={require('../../assets/images/image-top-laptops.jpg')}
				/>
				<ArticleContent>
					<ArticelNumber>02</ArticelNumber>
					<ArticelTitle>Top 10 Laptops of 2022</ArticelTitle>
					<ArticleText>
						Our best picks for various needs and budgets.
					</ArticleText>
				</ArticleContent>
			</Article>

			<Article>
				<ArticleImage
					src={require('../../assets/images/image-gaming-growth.jpg')}
				/>
				<ArticleContent>
					<ArticelNumber>03</ArticelNumber>
					<ArticelTitle>The Growth of Gaming</ArticelTitle>
					<ArticleText>
						How the pandemic has sparked fresh opportunities.
					</ArticleText>
				</ArticleContent>
			</Article>
		</NewsContainer>
	);
};

export default News;
