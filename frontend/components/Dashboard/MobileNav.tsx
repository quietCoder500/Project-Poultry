import React from 'react'

const MobileNav = () => {
	return (
		<div className="btm-nav h-12 md:hidden">
			<button>
				<span className="btm-nav-label">Notes</span>
			</button>
			<button className="active">
				<span className="btm-nav-label">Home</span>
			</button>
			<button>
				<span className="btm-nav-label">Records</span>
			</button>
		</div>
	);
}

export default MobileNav