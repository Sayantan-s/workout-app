import React from 'react'
export const Clock = _ => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

export const Logo = ({fill}) => <svg 
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 256 303" 
preserveAspectRatio="xMidYMid">
<path d="M219.773 37.656c-50.013-50.01-131.28-50.212-181.55-.576l-.59.587c-50.19 50.218-50.174 131.91.03 182.109l77.545 77.531a17.268 17.268 0 0 0 12.254 5.073c4.433 0 8.879-1.686 12.262-5.073 6.761-6.77 6.761-17.748 0-24.515l-77.557-77.538c-36.576-36.57-36.693-96.026-.34-132.75l.354-.347c36.698-36.675 96.399-36.664 133.074.012 30.116 30.118 34.438 81.659 10.034 119.904-5.147 8.064-2.776 18.782 5.288 23.93 8.083 5.164 18.787 2.782 23.93-5.279 33.489-52.474 27.29-121.047-14.734-163.068M188.74 223.752c6.765 6.77 6.773 17.749 0 24.51a17.224 17.224 0 0 1-12.244 5.087 17.322 17.322 0 0 1-12.274-5.078L86.68 170.74c-23.165-23.172-23.165-60.883 0-84.06 11.225-11.214 26.147-17.396 42.02-17.396h.017c15.87 0 30.794 6.19 42.011 17.422a59.397 59.397 0 0 1 14.916 59.06c-2.756 9.173-12.395 14.396-21.572 11.65-9.174-2.735-14.396-12.395-11.663-21.574a24.742 24.742 0 0 0-6.2-24.626c-4.677-4.683-10.885-7.26-17.5-7.263h-.01c-6.616 0-12.824 2.574-17.504 7.246-9.654 9.654-9.654 25.367 0 35.023l77.545 77.529" 
fill={fill}></path>
</svg>

export const Chevron =({size})=> <svg 
xmlns="http://www.w3.org/2000/svg" 
width={size} 
height={size} 
viewBox="0 0 24 24" 
fill="none" 
stroke="currentColor" 
strokeWidth="2.8" 
strokeLinecap="round" 
strokeLinejoin="round" 
class="feather feather-chevrons-right">
<polyline points="13 17 18 12 13 7"></polyline>
<polyline points="6 17 11 12 6 7"></polyline></svg>