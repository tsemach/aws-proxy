import express from 'express'

export interface AWSProxyRequest<T = any> extends express.Request {
  body: T
}