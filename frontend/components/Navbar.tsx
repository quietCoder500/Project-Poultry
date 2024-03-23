import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ThemeChange from "./general/Theme";

const Navbar = () => {
	return (
		<nav className="navbar bg-base-100 font-medium">
			{/* Mobile */}
			<div className="dropdown">
				<div
					tabIndex={0}
					role="button"
					className="btn btn-ghost md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					tabIndex={0}
					className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-52 gap-2">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>

					{/* Signed in user */}
					<SignedIn>
						<li>
							<Link href="/dashboard">Dashboard</Link>
						</li>
					</SignedIn>

					<SignedOut>
						<li>
							<SignInButton>
								<button>Login</button>
							</SignInButton>
						</li>
						<li>
							<SignUpButton>
								<button>Register</button>
							</SignUpButton>
						</li>
					</SignedOut>
				</ul>
			</div>

			{/* Always Visible */}
			<div className="flex-1 flex-wrap">
				<Link href="/" className="btn btn-ghost text-[18px] xs:text-xl w-14 xxs:w-auto md:text-nowrap text-balance">
					Project Poultry
				</Link>
			</div>

			{/* Tablet & above */}
			<div className="flex-none">
				<ThemeChange />
				<ul className="menu menu-horizontal p-0 content-center hidden md:flex">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>

					{/* Signed in user */}
					<SignedIn>
						<li>
							<Link href="/dashboard">Dashboard</Link>
						</li>
					</SignedIn>

					<SignedOut>
						<li>
							<Link href="/sign-in">Login</Link>
						</li>
						<li>
							<Link href="/sign-up">Register</Link>
						</li>
					</SignedOut>
				</ul>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<Link
						href="/sign-in"
						className="btn btn-outline btn-secondary p-1 mr-4 md:hidden">
						Login
					</Link>
				</SignedOut>
			</div>
		</nav>
	);
};

export default Navbar;
