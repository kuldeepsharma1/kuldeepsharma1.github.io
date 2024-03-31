"use client"

import { CopyIcon } from "@radix-ui/react-icons"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "../ModeToggle"

export default function Header() {
    const [currentUrl, setCurrentUrl] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            // Optionally, you can show a success message or perform any other action upon successful copying.
            console.log('URL copied to clipboard:', currentUrl);
        } catch (error) {
            // Handle any errors that might occur during copying
            console.error('Failed to copy URL to clipboard:', error);
        }
    };
    return (
        <div>
            <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        <h1>Kuldeep</h1>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <button
                            type="button"
                            data-drawer-toggle="drawer-navigation"
                            aria-controls="drawer-navigation"
                            className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Toggle search</span>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                ></path>
                            </svg>
                        </button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Share</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Share link</DialogTitle>
                                    <DialogDescription>
                                        Anyone who has this link will be able to view this.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <Label htmlFor="link" className="sr-only">
                                            Link
                                        </Label>
                                        <Input
                                            id="link"
                                            value={currentUrl}
                                            readOnly
                                        />
                                    </div>
                                    {!copied && (
                                        <Button type="button" size="sm" className="px-3" onClick={copyToClipboard}>
                                            <span className="sr-only">Copy</span>
                                            <CopyIcon className="h-4 w-4" />
                                        </Button>
                                    )}
                                   

                                </div>
                                {copied && (
                                        <p className="text-sm text-gray-500 mt-2">URL copied to clipboard.</p>
                                    )}
                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <button
                            type="button"
                            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700   "
                        >
                            <span className="sr-only">View notifications</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>

                        </button>

                        <div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl" id="notification-dropdown">
                            <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                                Notifications
                            </div>
                            <div>
                                <a href="#" className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                                    <div className="flex-shrink-0">
                                        <img className="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                                        <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="pl-3 w-full">
                                        <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                            New message from
                                            <span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>:
                                            hey Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quidem?
                                        </div>
                                        <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                                            a few moments ago
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="#" className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
                                <div className="inline-flex items-center">
                                    <svg aria-hidden="true" className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                                    </svg>
                                    View all
                                </div>
                            </a>
                        </div>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </div>
    )
}


