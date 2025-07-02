

import React, { useState } from 'react';
import { format, add, sub } from 'date-fns';
import { FiPlus, FiMinus, FiCopy, FiDownload } from 'react-icons/fi';

const TimeAdder: React.FC = () => {
    const [baseDate, setBaseDate] = useState<string>(new Date().toISOString().slice(0, 16));
    const [years, setYears] = useState<number>(0);
    const [months, setMonths] = useState<number>(0);
    const [weeks, setWeeks] = useState<number>(0);
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [resultDate, setResultDate] = useState<string>('');

    const handleAddSubtract = (operation: 'add' | 'subtract') => {
        const date = new Date(baseDate);
        const duration = { years, months, weeks, days, hours, minutes, seconds };
        const newDate = operation === 'add' ? add(date, duration) : sub(date, duration);
        setResultDate(format(newDate, "yyyy-MMM-dd HH:mm"));
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
        link.setAttribute('download', 'time-adder-export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* SEO Title: Add or Subtract Time from a Date */}
            {/* Meta Description: Instantly add or subtract years, months, days, or hours from any date with this easy-to-use calculator. */}
            <div className="card">
                <div className="card-header">
                    <h2><FiPlus className="me-2" /><FiMinus className="me-2" />Add/Subtract Duration</h2>
                </div>
                <div className="card-body p-4">
                    <div className="row">
                        <div className="col-md-12">
                            <label className="form-label">Base Date:</label>
                            <input type="datetime-local" className="form-control" value={baseDate} onChange={(e) => setBaseDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="row g-2 mt-3">
                        <div className="col-12 col-md"><input type="number" className="form-control" placeholder="Years" onChange={(e) => setYears(parseInt(e.target.value) || 0)} /></div>
                    <div className="col-12 col-md"><input type="number" className="form-control" placeholder="Months" onChange={(e) => setMonths(parseInt(e.target.value) || 0)} /></div>
                    <div className="col-12 col-md"><input type="number" className="form-control" placeholder="Weeks" onChange={(e) => setWeeks(parseInt(e.target.value) || 0)} /></div>
                    <div className="col-12 col-md"><input type="number" className="form-control" placeholder="Days" onChange={(e) => setDays(parseInt(e.target.value) || 0)} /></div>
                    <div className="col-12 col-md"><input type="number" className="form-control" placeholder="Hours" onChange={(e) => setHours(parseInt(e.target.value) || 0)} /></div>
                    <div className="col-12 col-md"><input type="number" className="form-control" placeholder="Minutes" onChange={(e) => setMinutes(parseInt(e.target.value) || 0)} /></div>
                    <div className="col-12 col-md"><input type="number" className="form-control" placeholder="Seconds" onChange={(e) => setSeconds(parseInt(e.target.value) || 0)} /></div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mt-4" onClick={() => handleAddSubtract('add')}><FiPlus className="me-2" />Add</button>
                        <button className="btn btn-primary mt-4 ms-2" onClick={() => handleAddSubtract('subtract')}><FiMinus className="me-2" />Subtract</button>
                    </div>
                    {resultDate && (
                        <div className="mt-4 result-box">
                            <h4 className="mb-3">Result</h4>
                            <p className="fs-5">{resultDate}</p>
                            <button className="btn btn-secondary btn-sm" onClick={() => copyToClipboard(resultDate)}><FiCopy className="me-2" />Copy</button>
                            <button className="btn btn-secondary btn-sm ms-2" onClick={() => exportToCsv([{ "resultDate": resultDate }])}><FiDownload className="me-2" />Export to CSV</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <p>Need to find a future or past date? Use this Add/Subtract Date Calculator to quickly compute the result after adding or subtracting any combination of years, months, days, hours, or minutes from a given date and time. Perfect for setting reminders, deadlines, maturity dates, or tracking schedules.</p>
                <p>Simply enter your base date and choose how much time you want to add or subtract — the result updates instantly.</p>
                
            </div>
        </>
    );
};

export default TimeAdder;
