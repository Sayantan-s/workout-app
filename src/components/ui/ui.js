import React from 'react'
export const Clock = _ => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

export const Logo = ({fill,size}) => <svg 
width={size}
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 256 303" 
preserveAspectRatio="xMidYMid">
<path d="M219.773 37.656c-50.013-50.01-131.28-50.212-181.55-.576l-.59.587c-50.19 50.218-50.174 131.91.03 182.109l77.545 77.531a17.268 17.268 0 0 0 12.254 5.073c4.433 0 8.879-1.686 12.262-5.073 6.761-6.77 6.761-17.748 0-24.515l-77.557-77.538c-36.576-36.57-36.693-96.026-.34-132.75l.354-.347c36.698-36.675 96.399-36.664 133.074.012 30.116 30.118 34.438 81.659 10.034 119.904-5.147 8.064-2.776 18.782 5.288 23.93 8.083 5.164 18.787 2.782 23.93-5.279 33.489-52.474 27.29-121.047-14.734-163.068M188.74 223.752c6.765 6.77 6.773 17.749 0 24.51a17.224 17.224 0 0 1-12.244 5.087 17.322 17.322 0 0 1-12.274-5.078L86.68 170.74c-23.165-23.172-23.165-60.883 0-84.06 11.225-11.214 26.147-17.396 42.02-17.396h.017c15.87 0 30.794 6.19 42.011 17.422a59.397 59.397 0 0 1 14.916 59.06c-2.756 9.173-12.395 14.396-21.572 11.65-9.174-2.735-14.396-12.395-11.663-21.574a24.742 24.742 0 0 0-6.2-24.626c-4.677-4.683-10.885-7.26-17.5-7.263h-.01c-6.616 0-12.824 2.574-17.504 7.246-9.654 9.654-9.654 25.367 0 35.023l77.545 77.529" 
fill={fill}></path>
</svg>

export const ChevronRight =({size})=> <svg 
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

export const ChevronDown = ({size}) => <svg 
xmlns="http://www.w3.org/2000/svg" 
width={size} 
height={size} 
viewBox="0 0 24 24" 
fill="none" 
stroke="#fff" 
strokeWidth="2.5" 
strokeLinecap="round" 
strokeLinejoin="round" 
className="feather feather-chevrons-down">
<polyline points="7 13 12 18 17 13"></polyline>
<polyline points="7 6 12 11 17 6"></polyline></svg>


export const ArrowLeft = ({size,col}) => <svg 
xmlns="http://www.w3.org/2000/svg" 
width={size} 
height={size} 
viewBox="0 0 24 24" 
fill="none" 
stroke={col} 
strokeWidth="2.8" 
strokeLinecap="round" 
strokeLinejoin="round" 
className="feather feather-chevron-left">
<polyline points="15 18 9 12 15 6"></polyline></svg>

export const ArrwoRight = ({size,col}) => <svg 
xmlns="http://www.w3.org/2000/svg" 
width={size} 
height={size} 
viewBox="0 0 24 24" 
fill="none" 
stroke={col} 
strokeWidth="2.8" 
strokeLinecap="round" 
strokeLinejoin="round" 
className="feather feather-chevron-right">
<polyline points="9 18 15 12 9 6"></polyline></svg>


export const Facebook = _ => 
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<path d="M23.446 18l0.889-5.791h-5.557v-3.758c0-1.584 0.776-3.129 3.265-3.129h2.526v-4.93c0 0-2.292-0.391-4.484-0.391-4.576 0-7.567 2.774-7.567 7.795v4.414h-5.087v5.791h5.087v14h6.26v-14z"/>
</svg>

export const Instagram = _ => 
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"/>
</svg>

export const LinkedIn = _ => 
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"/>
</svg>

export const Medium = _ => 
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M4.469 8.894c0.038-0.369-0.106-0.738-0.381-0.988l-2.819-3.4v-0.506h8.762l6.775 14.856 5.956-14.856h8.356v0.506l-2.412 2.313c-0.206 0.156-0.313 0.419-0.269 0.675v17c-0.044 0.256 0.063 0.519 0.269 0.675l2.356 2.313v0.506h-11.856v-0.506l2.444-2.369c0.238-0.238 0.238-0.313 0.238-0.675v-13.738l-6.794 17.244h-0.919l-7.9-17.244v11.556c-0.069 0.487 0.094 0.975 0.438 1.325l3.175 3.85v0.506h-9v-0.5l3.175-3.856c0.337-0.35 0.494-0.844 0.406-1.325z"/>
</svg>

export const SquareSpace = _ => 
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <path d="M30.208 11.625c-2.405-2.401-6.301-2.401-8.755 0l-9.803 9.801c-0.599 0.6-0.599 1.6 0 2.199 0.604 0.599 1.604 0.599 2.204 0l9.801-9.803c1.199-1.197 3.147-1.197 4.349 0 1.203 1.204 1.203 3.151 0 4.355l-9.651 9.651c1.197 1.199 3.151 1.199 4.348 0l7.453-7.453c2.448-2.448 2.448-6.348 0.052-8.749zM26.907 14.875c-0.6-0.599-1.6-0.599-2.199 0l-9.807 9.855c-1.199 1.197-3.147 1.197-4.349 0-0.599-0.604-1.599-0.604-2.197 0-0.605 0.599-0.605 1.599 0 2.197 2.4 2.401 6.296 2.401 8.749 0l9.803-9.801c0.599-0.652 0.599-1.652 0-2.251zM23.656 5.073c-2.401-2.401-6.301-2.401-8.755 0l-9.803 9.801c-0.599 0.599-0.599 1.599 0 2.199 0.604 0.604 1.604 0.604 2.204 0l9.859-9.803c1.199-1.197 3.161-1.197 4.36 0 0.604 0.604 1.604 0.604 2.197 0 0.563-0.645 0.563-1.593-0.036-2.197zM20.355 8.323c-0.6-0.599-1.6-0.599-2.199 0l-9.801 9.855c-1.199 1.197-3.152 1.197-4.355 0-1.197-1.199-1.197-3.151 0-4.355l9.651-9.651c-1.197-1.199-3.145-1.199-4.348 0l-7.5 7.453c-2.401 2.401-2.401 6.301 0 8.749 2.4 2.401 6.296 2.401 8.749 0l9.803-9.801c0.599-0.652 0.599-1.652 0-2.251z"/>
</svg>