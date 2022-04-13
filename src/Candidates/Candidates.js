import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Candidates.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Navigation ,Pagination]);

const candidatesApiUrl = "https://6251492bdfa31c1fbd6bcc26.mockapi.io/candidates";
const demoImg = "https://th.bing.com/th/id/R.31e421e618678d5385f382c40a757eef?rik=tkGCsYacI8KKrQ&pid=ImgRaw&r=0&sres=1&sresct=1";

const Candidates = () => {
	const [candidate, setCandidate] = useState([]);
	useEffect(() => {
            setTimeout(function() {
                  axios.get(candidatesApiUrl).then((res) => {
                        setCandidate(res.data);
                  });
            }, 1000);
	}, []);
	return (
		<div className="Candidates">
			<div className="candidates-header">
				<span className="candidates-find">
					find top talents
				</span>
				<h1 className="candidates-title">
					Explore Our Latest Candidates
				</h1>
				<span className="hr"></span>
				<p className="candidates-desc">
					Work wityh someone perfect for your team & get
					amazing results working with the best employees .
					hire talents with confidence
				</p>
			</div>
			<div className="candidates-carousel">
				<Swiper
					slidesPerView={6}
					spaceBetween={20}
					slidesPerGroup={4}
					loop={true}
					pagination={true}
					navigation={true}
					modules={[Pagination, Navigation]}
					breakpoints={{
						0: {
						  slidesPerView: 1,
						},
						768: {
						  slidesPerView: 2,
						},
						1200: {
						  slidesPerView: 6,
						},
					}}
					className="mySwiper"
				>
					{candidate.length > 0 && candidate.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div className="slide-content">
								<img src={slide.avatar === null ? slide.avatar : demoImg} alt="" />
								<h1>{slide.name}</h1>
								<span>{slide.title}</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				
			</div>
                  <div className="explore-all">
                        <a href="#">explore all</a>
                  </div>
		</div>
	);
};

export default Candidates;
