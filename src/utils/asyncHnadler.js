const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((error) => next(error))
    }
}

export { asyncHandler }




// Second Method
// const asyncHandler = (fn) =>  async requestHandler(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.error(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// } 