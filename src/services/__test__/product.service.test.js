import {
  // getProductApi,
  // getAIAIntroductionApi,
  // getRecommendedProductsApi,
  // getPlanQuoteByProductId,
  // getPlanDetailByPlanId,
  getHowItWorksApi,
  getHowItWorksPA100Api,
  getWhyChooseUsApi,
  getCommentApi,
  getContactUsApi,
  getPlanSummaryApi,
} from "../content"

// const productId = 'PROD_1';
// const data = {
//   smoke: true,
//   gender: 'm',
//   dob: '1990-01-01',
//   premiumMode: 'A',
// };
describe("content and product service", () => {
  // it('getProductApi should return object and productId must be same', async (done) => {
  //   const res = await getProductApi(productId);
  //   expect(typeof res).toBe('object');
  //   expect(res.id).toEqual(productId);
  //   done();
  // });
  // it('should return AIA introduction when getAIAIntroductionApi is called', async (done) => {
  //   const res = await getAIAIntroductionApi(productId);
  //   expect(typeof res).toBe('object');
  //   expect(res.data).toBeDefined();
  //   done();
  // });
  // it('should return array of Quote by productId when getPlanQuoteByProductId is called', async (done) => {
  //   data.id = 'PROD_1';
  //   const res = await getPlanQuoteByProductId({ body: data });
  //   expect(typeof res).toBe('object');
  //   expect(Array.isArray(res)).toBe(true);
  //   done();
  // });

  // it('should return recommended plan by productId when getRecommendedProductsApi is called', async (done) => {
  //   const res = await getRecommendedProductsApi(data, productId);
  //   expect(typeof res).toBe('object');
  //   expect(Array.isArray(res)).toBe(true);
  //   done();
  // });

  // it('should return recommended plan when getRecommendedProductsApi without smoke is called', async (done) => {
  //   delete data.smoke;
  //   const res = await getRecommendedProductsApi(data, productId);
  //   expect(typeof res).toBe('object');
  //   expect(Array.isArray(res)).toBe(true);
  //   done();
  // });

  // it('should return recommended plan when getRecommendedProductsApi without gender is called', async (done) => {
  //   delete data.gender;
  //   const res = await getRecommendedProductsApi(data, productId);
  //   expect(typeof res).toBe('object');
  //   expect(Array.isArray(res)).toBe(true);
  //   done();
  // });

  // it('should return recommended plan when getRecommendedProductsApi without dob is called', async (done) => {
  //   delete data.dob;
  //   const res = await getRecommendedProductsApi(data, productId);
  //   expect(typeof res).toBe('object');
  //   expect(Array.isArray(res)).toBe(true);
  //   done();
  // });

  // it('should return plan detail when getPlanDetailByPlanId is called', async (done) => {
  //   const planId = 'A';
  //   const res = await getPlanDetailByPlanId(productId, planId);
  //   expect(typeof res).toBe('object');
  //   expect(res.id).toEqual(planId);
  //   done();
  // });

  it("should return how it works when getHowItWorksApi is called", async (done) => {
    const res = await getHowItWorksApi()
    expect(typeof res).toBe("object")
    expect(res.liveHealthy).toBeDefined()
    expect(res.community).toBeDefined()
    expect(res.benefits).toBeDefined()
    done()
  })

  it("should return how it works when getHowItWorksPA100Api is called", async (done) => {
    const res = await getHowItWorksPA100Api()
    expect(typeof res).toBe("object")
    expect(res.liveHealthy).toBeDefined()
    done()
  })

  it("should return how it works when getWhyChooseUsApi is called", async (done) => {
    const res = await getWhyChooseUsApi()
    expect(typeof res).toBe("object")
    expect(res.data).toBeDefined()
    done()
  })
  it("should return how it works when getCommentApi is called", async (done) => {
    const res = await getCommentApi()
    expect(typeof res).toBe("object")
    done()
  })
  it("should return how it works when getContactUsApi is called", async (done) => {
    const res = await getContactUsApi()
    expect(typeof res).toBe("object")
    expect(res.data).toBeDefined()
    done()
  })
  it("should return how it works when getPlanSummaryApi is called", async (done) => {
    const res = await getPlanSummaryApi()
    expect(typeof res).toBe("object")
    expect(res.data).toBeDefined()
    done()
  })
})
