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
			<BannerRight>Right</BannerRight>
		</BannerContainer>
	);
}

export default Banner;
