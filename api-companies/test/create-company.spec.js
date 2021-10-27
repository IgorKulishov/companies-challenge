'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const mock = require('../test/mock');
const createCompany = require('../controllers/create-company');
const { companies } = require('../constants/temp-store/store');
const db = require('../db/init');

describe('create company', () => {
    let querySpy = sinon.spy();
    const clientSpy = sinon.stub(db, 'init').resolves({
        query: querySpy
    });
    beforeEach(() => {
        querySpy.resetHistory();
    });
    it('was able to create company', async () => {
        const mockLambdaCallback = sinon.spy();
        await createCompany.create(mock.eventMock, companies, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to create company', async () => {
        const mockLambdaCallback = sinon.spy();
        await createCompany.create(mock.emptyEventMock, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
