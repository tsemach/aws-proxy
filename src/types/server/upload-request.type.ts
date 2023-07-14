import express from 'express'

export interface UploadRequest<T = any> extends express.Request {
  body: T
}