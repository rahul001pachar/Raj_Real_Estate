import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Calendar, PieChart, BarChart3 } from 'lucide-react';

const InvestmentCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTenure, setLoanTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [appreciation, setAppreciation] = useState(8);
  const [results, setResults] = useState({
    loanAmount: 0,
    emi: 0,
    totalInterest: 0,
    futureValue: 0,
    totalReturns: 0
  });

  useEffect(() => {
    calculateInvestment();
  }, [propertyValue, downPayment, loanTenure, interestRate, appreciation]);

  const calculateInvestment = () => {
    const downPaymentAmount = (propertyValue * downPayment) / 100;
    const loanAmount = propertyValue - downPaymentAmount;
    
    // EMI Calculation
    const monthlyRate = interestRate / (12 * 100);
    const numberOfPayments = loanTenure * 12;
    const emi = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalInterest = (emi * numberOfPayments) - loanAmount;
    
    // Future Value with appreciation
    const futureValue = propertyValue * Math.pow(1 + appreciation / 100, loanTenure);
    const totalReturns = futureValue - propertyValue;

    setResults({
      loanAmount,
      emi,
      totalInterest,
      futureValue,
      totalReturns
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Investment Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your Investment Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our advanced calculator to estimate EMI, returns, and make informed investment decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Investment Calculator</h3>
            </div>

            <div className="space-y-6">
              {/* Property Value */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="5000000"
                  />
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="100000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment ({downPayment}%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Tenure ({loanTenure} years)
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5 years</span>
                  <span>30 years</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate ({interestRate}% p.a.)
                </label>
                <input
                  type="range"
                  min="6"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>6%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Appreciation Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Appreciation ({appreciation}% p.a.)
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="0.5"
                  value={appreciation}
                  onChange={(e) => setAppreciation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* EMI Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Monthly EMI</h4>
              </div>
              <div className="text-3xl font-bold text-gray-900">{formatCurrency(results.emi)}</div>
              <div className="text-sm text-gray-600 mt-1">
                Loan Amount: {formatCurrency(results.loanAmount)}
              </div>
            </div>

            {/* Future Value Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Future Value</h4>
              </div>
              <div className="text-3xl font-bold text-gray-900">{formatCurrency(results.futureValue)}</div>
              <div className="text-sm text-green-600 mt-1">
                Returns: {formatCurrency(results.totalReturns)}
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment Breakdown</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Down Payment</span>
                  <span className="font-semibold">{formatCurrency((propertyValue * downPayment) / 100)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Investment</span>
                  <span className="font-semibold">{formatCurrency(propertyValue + results.totalInterest)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">Net Profit</span>
                    <span className="font-bold text-green-600">
                      {formatCurrency(results.totalReturns - results.totalInterest)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold">Return on Investment</h4>
              </div>
              <div className="text-3xl font-bold">
                {(((results.totalReturns - results.totalInterest) / propertyValue) * 100).toFixed(1)}%
              </div>
              <div className="text-blue-100 text-sm mt-1">
                Over {loanTenure} years
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Invest?</h3>
            <p className="text-gray-600 mb-6">
              Get personalized investment advice from our experts and explore properties that match your budget.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;