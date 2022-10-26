import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FAQ = () => {
    const blogs = useLoaderData();
    return (
        <div className="md:w-2/3 mx-auto">
            <div className="bg-white">
                <div className=" flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        React Blog Questions And Answers
                    </p>
                    <div className="">


                        {
                            blogs.map(blog => <details key={blog.id} className="w-full my-3 rounded-lg ring-1 ring-purple-600">
                                <summary className="px-4 py-6">
                                    {blog.name}
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                    {blog.description}
                                </p>
                            </details>)
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;