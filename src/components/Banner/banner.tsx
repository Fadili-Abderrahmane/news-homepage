import React from 'react';
import {
	BannerContainer,
	BannerImage,
	BannerLeft,
	BannerRight,
	BannerContent,
	BannerTitle,
	BannerContentLeft,
	BannerContentRight,
	BannerText,
	BannerButton,
	BannerNew,
	NewTitle,
	NewItem,
	NewItemTitle,
	NewItemText,
} from './banner.styles';

function Banner() {
	return (
		<BannerContainer>
			<BannerLeft>
				<BannerImage
					src={require('../../assets/images/image-web-3-desktop.jpg')}
				/>
				<BannerContent>
					<BannerContentLeft>
						<BannerTitle>The Bright Future of Web 3.0?</BannerTitle>
					</BannerContentLeft>

					<BannerContentRight>
						<BannerText>
							We dive into the next evolution of the web that claims to put the
							power of the platforms back into the hands of the people. But is
							it really fulfilling its promise?
						</BannerText>
						<BannerButton href='#'>Read more</BannerButton>
					</BannerContentRight>
				</BannerContent>
			</BannerLeft>
			<BannerRight>
				<BannerNew>
					<NewTitle>New</NewTitle>
					<NewItem>
						<NewItemTitle>Hydrogen VS Electric Cars</NewItemTitle>
						<NewItemText>
							Will hydrogen-fueled cars ever catch up to EVs?
						</NewItemText>
					</NewItem>

					<NewItem>
						<NewItemTitle>The Downsides of AI Artistry</NewItemTitle>
						<NewItemText>
							What are the possible adverse effects of on-demand AI image
							generation?
						</NewItemText>
					</NewItem>

					<NewItem>
						<NewItemTitle>Is VC Funding Drying Up?</NewItemTitle>
						<NewItemText>
							Private funding by VC firms is down 50% YOY. We take a look at
							what that means.
						</NewItemText>
					</NewItem>
				</BannerNew>
			</BannerRight>
		</BannerContainer>
	);
}

export default Banner;
