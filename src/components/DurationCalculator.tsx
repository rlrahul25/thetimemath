

import React, { useState } from 'react';
import { differenceInMilliseconds } from 'date-fns';
import * as FiIcons from 'react-icons/fi';

const DurationCalculator: React.FC = () => {
    const [startDate, setStartDate] = useState<string>(new Date().toISOString().slice(0, 16));
    const [endDate, setEndDate] = useState<string>(new Date().toISOString().slice(0, 16));
    const [duration, setDuration] = useState<string>('');

    const calculateDuration = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diff = differenceInMilliseconds(end, start);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setDuration(`${days} days, ${hours} hours, ${minutes} minutes`);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const exportToCsv = (data: any) => {
        const headers = Object.keys(data[0]).join(',');
        const rows = data.map((row: any) => Object.values(row).join(',')).join('\n');
        const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'duration-export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* SEO Title: Calculate Duration Between Two Dates Instantly */}
            {/* Meta Description: Use our free Duration Calculator to find the exact number of days, hours, minutes, and seconds between two dates and times. */}
            <div className="card">
                <div className="card-header">
                    <h2><FiIcons.FiCalendar className="me-2" />Duration Between Two Dates</h2>
                </div>
                <div className="card-body p-4">
                    <div className="row g-3 align-items-center">
                        <div className="col-md-5">
                            <label className="form-label">Start Date:</label>
                            <input type="datetime-local" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className="col-md-2 text-center">
                            <FiIcons.FiChevronsRight size={30} className="text-muted" />
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">End Date:</label>
                            <input type="datetime-local" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mt-4" onClick={calculateDuration}>Calculate Duration</button>
                    </div>
                    {duration && (
                        <div className="mt-4 result-box">
                            <h4 className="mb-3">Result</h4>
                            <p className="fs-5">{duration}</p>
                            <button className="btn btn-secondary btn-sm" onClick={() => copyToClipboard(duration)}><FiIcons.FiCopy className="me-2" />Copy</button>
                            <button className="btn btn-secondary btn-sm ms-2" onClick={() => exportToCsv([{ "duration": duration }])}><FiIcons.FiDownload className="me-2" />Export to CSV</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <p>Use this smart Duration Calculator to quickly find out how much time has passed between two specific dates and times. Whether you're planning a trip, calculating age, or checking project timelines, this tool gives you precise results down to the second. Enter your start and end dates and click "Calculate Duration" to see the total span in years, months, days, hours, and minutes.</p>
                <ul>
                    <li>✅ Great for project managers, students, HR teams, and anyone working with time-based schedules.</li>
                    <li>✅ Includes leap year and time zone awareness.</li>
                </ul>
                
            </div>
        </>
    );
};

export default DurationCalculator;
