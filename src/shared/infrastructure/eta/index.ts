import { file } from 'bun'
import { Effect } from 'effect'
import { dual } from 'effect/Function'
import { Eta as eta } from 'eta'

import { templates } from 'shared/assets/templates'
import { ErrorTag, taggedError } from 'shared/utils/errors'

export class Eta extends Effect.Service<Eta>()('Eta', {
	effect: Effect.sync(() => new eta()).pipe(
		Effect.map(eta => ({
			getEta: Effect.sync(() => eta),
			renderTemplate: dual<
				(template: keyof typeof templates) => (data: object) => Effect.Effect<string, ErrorTag>,
				(data: object, template: keyof typeof templates) => Effect.Effect<string, ErrorTag>
			>(2, (data: object, template: keyof typeof templates) =>
				Effect.tryPromise({
					try: () => file(templates[template] || templates.test).text(),
					catch: taggedError(ErrorTag.LOAD_FILE),
				}).pipe(
					Effect.tryMap({
						try: string => eta.renderString(string, data),
						catch: taggedError(ErrorTag.RENDER_ETA),
					}),
					Effect.withSpan('eta_render_template'),
					Effect.annotateSpans({
						template,
					}),
				),
			),
		})),
	),
}) {}
