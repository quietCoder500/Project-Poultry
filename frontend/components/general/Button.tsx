"use client"
const Btn = (onClick: any, text: any) => {
  return (
		<button onClick={onClick} type="button" className="btn btn-primary">
			{text}
		</button>
  );
}

export default Btn
