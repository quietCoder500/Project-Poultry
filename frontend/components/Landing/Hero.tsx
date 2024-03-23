import { SignUpButton } from "@clerk/nextjs";
import { Borel } from "next/font/google";
import Link from "next/link";

const borel = Borel({
	weight: "400",
	subsets: ["latin"],
});

const Hero = () => {
	return (
		<div className="flex w-screen items-center justify-center flex-col px-4">
			<h2 className="text-3xl font-semibold text-center px-10 my-6 outer-headings">
				The one site for all your Poultry
				<div className="inner-headings font-medium text-slate-500">
					<span>
						Questions <br />
						Planning <br />
						Records <br />
						<p
							className={`text-primary ${borel.className} mt-4 font-bold text-[50px]`}>
							Notes <br />
						</p>
					</span>
				</div>
			</h2>

			<Link href="/dashboard" className="btn btn-primary text-white font-bold my-2 rounded-full w-full max-w-2xl">
				Take Some Notes!
			</Link>

			<Link href="/about" className="btn btn-outline btn-primary font-bold my-2  rounded-full w-full max-w-2xl hover:text-white">
				Learn More
			</Link>
				
		</div>
	);
};

export default Hero;
