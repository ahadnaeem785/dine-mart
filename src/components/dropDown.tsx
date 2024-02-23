"use client"

import Link from "next/link"

export default function DropDown() {
    return (
        <div className="lg:hidden">
            <div className="dropdown ">
                <label tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-black w-7 h-7 mt-1"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm -ml-12 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/category/femail"}>Femail</Link></li>
                    <li><Link href={"/category/male"}>Male</Link></li>
                    <li><Link href={"/category/kids"}>Kids</Link></li>
                    <li><Link href={"/products"}>All Products</Link></li>

                    <li><Link href={"/contact"}>Contact</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                </ul>
            </div >
        </div >
    )
}
