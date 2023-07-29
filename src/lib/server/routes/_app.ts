import { redis } from '$lib/utils/redis';
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

import { LOGIN } from '$env/static/private'

export const appRouter = router({
	submitKV: publicProcedure
		.input(
			z.object({
				table: z.any(),
				key: z.string(),
			})
		)
		.mutation(({ input }) => {
			input.table.forEach((item: any) => {
				console.log(item);
			})
			redis.json.set(`${input.key}`, '$', JSON.stringify(input.table));
			return 'success';
		}),
	fetchKV: publicProcedure
		.input(
			z.object({
				table: z.string(),
			})
		)
		.query(async ({ input }) => {
			let result = await redis.json.get(`${input.table}`, '$');
			return result[0];
		}),
});

export type AppRouter = typeof appRouter;
