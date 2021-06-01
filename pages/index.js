import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { H1 } from '../components/headings'

const SectionTitle = ({ children }) => <H1 className="mt-16">{children}</H1>

export default function Home() {
	const [response, setResponse] = useState(null)
	const [name, setName] = useState('')
	const [about, setAbout] = useState('')
	
	const submitForm = () => {
		console.log('--> name', name)
		console.log('--> about', about)

		axios({
			url: '/api/form',
			method: 'POST',
			data: {
				name,
				about
			}
		}).then((resp) => {
			console.log('--> response', resp)
			setResponse(resp.data)
		})
	}

	return (
		<div>
			<Head>
				<title>Tailwind CSS Test</title>
			</Head>
			<main>
				<SectionTitle>Form with reCaptcha v3</SectionTitle>
				<p>Hidden reCaptcha Implementation in Basic Form with Back-end Captcha Validation</p>

				<div className="space-y-8 divide-y divide-gray-200">
					<div className="space-y-8 divide-y divide-gray-200">
						<div className="pt-8">
							<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
										First name
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="first_name"
											id="first_name"
											autoComplete="given-name"
											className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
											value={name}
											onChange={(e) => { setName(e.target.value) }}
										/>
									</div>
								</div>

								<div className="sm:col-span-6">
									<label htmlFor="about" className="block text-sm font-medium text-gray-700">
										About
									</label>
									<div className="mt-1">
										<textarea
											id="about"
											name="about"
											rows={3}
											className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
											value={about}
											onChange={(e) => { setAbout(e.target.value) }}
										/>
									</div>
									<p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
								</div>
							</div>
						</div>
					</div>

					<div className="pt-5">
						<div className="flex justify-end">
							<button
								type="button"
								className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								onClick={submitForm}
							>
								Save
							</button>
						</div>
					</div>
				</div>

				{response && (
					<pre className="mt-8 bg-gray-200 rounded-xl p-6">
						{JSON.stringify(response, null, 4)}
					</pre>
				)}
			</main>
		</div>
	)
}
